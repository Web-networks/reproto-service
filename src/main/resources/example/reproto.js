(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-serialization-kotlinx-serialization-runtime'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-runtime'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'reproto'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'reproto'.");
    }if (typeof this['kotlinx-serialization-kotlinx-serialization-runtime'] === 'undefined') {
      throw new Error("Error loading module 'reproto'. Its dependency 'kotlinx-serialization-kotlinx-serialization-runtime' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-runtime' is loaded prior to 'reproto'.");
    }root.reproto = factory(typeof reproto === 'undefined' ? {} : reproto, kotlin, this['kotlinx-serialization-kotlinx-serialization-runtime']);
  }
}(this, function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_runtime) {
  'use strict';
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var throwUPAE = Kotlin.throwUPAE;
  var equals = Kotlin.equals;
  var Unit = Kotlin.kotlin.Unit;
  var ensureNotNull = Kotlin.ensureNotNull;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var StructureKind = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.StructureKind;
  var SerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.SerialDescriptor_dhifv3$;
  var KSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.KSerializer;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var compareValuesBy = Kotlin.kotlin.comparisons.compareValuesBy_d999kh$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var SerialClassDescImpl = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.SerialClassDescImpl;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.MissingFieldException;
  var Comparable = Kotlin.kotlin.Comparable;
  var getKClass = Kotlin.getKClass;
  var ContextSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.ContextSerializer;
  var L0 = Kotlin.Long.ZERO;
  var plus_0 = Kotlin.kotlin.collections.plus_khz7k3$;
  var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
  var LinkedHashMapSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.LinkedHashMapSerializer;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mutableMapOf = Kotlin.kotlin.collections.mutableMapOf_qfcya0$;
  var Math_0 = Math;
  var SerializersModule = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.modules.SerializersModule_q4tcel$;
  var throwCCE = Kotlin.throwCCE;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var ArrayListSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.ArrayListSerializer;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var Random = Kotlin.kotlin.random.Random;
  var generateSequence = Kotlin.kotlin.sequences.generateSequence_9ce4rd$;
  var take = Kotlin.kotlin.sequences.take_wuwhe2$;
  var plus_1 = Kotlin.kotlin.collections.plus_hjm0xj$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var ObjectSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.ObjectSerializer;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var L_1 = Kotlin.Long.NEG_ONE;
  var sorted = Kotlin.kotlin.collections.sorted_exjks8$;
  var IndexOutOfBoundsException_init = Kotlin.kotlin.IndexOutOfBoundsException_init;
  var PolymorphicSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.PolymorphicSerializer;
  var SealedClassSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.SealedClassSerializer;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var getCallableRef = Kotlin.getCallableRef;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var mapOf = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var plus_2 = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.modules.plus_7n7cf$;
  var JsonConfiguration = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.json.JsonConfiguration;
  var Json = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.json.Json;
  ChainedUpstream$child$ObjectLiteral.prototype = Object.create(ChainedUpstream.prototype);
  ChainedUpstream$child$ObjectLiteral.prototype.constructor = ChainedUpstream$child$ObjectLiteral;
  ClientNode$Upstream.prototype = Object.create(ChainedUpstream.prototype);
  ClientNode$Upstream.prototype.constructor = ClientNode$Upstream;
  IncomparableException.prototype = Object.create(RuntimeException.prototype);
  IncomparableException.prototype.constructor = IncomparableException;
  ObservableCrdt.prototype = Object.create(Crdt.prototype);
  ObservableCrdt.prototype.constructor = ObservableCrdt;
  LWWRegister.prototype = Object.create(ObservableCrdt.prototype);
  LWWRegister.prototype.constructor = LWWRegister;
  IntAlias.prototype = Object.create(TypedAlias.prototype);
  IntAlias.prototype.constructor = IntAlias;
  LongAlias.prototype = Object.create(TypedAlias.prototype);
  LongAlias.prototype.constructor = LongAlias;
  BooleanAlias.prototype = Object.create(TypedAlias.prototype);
  BooleanAlias.prototype.constructor = BooleanAlias;
  Change$Insert.prototype = Object.create(Change.prototype);
  Change$Insert.prototype.constructor = Change$Insert;
  Change$Delete.prototype = Object.create(Change.prototype);
  Change$Delete.prototype.constructor = Change$Delete;
  Change$Move.prototype = Object.create(Change.prototype);
  Change$Move.prototype.constructor = Change$Move;
  Sequence.prototype = Object.create(ObservableCrdt.prototype);
  Sequence.prototype.constructor = Sequence;
  SequenceOperationInsert.prototype = Object.create(SequenceOperation.prototype);
  SequenceOperationInsert.prototype.constructor = SequenceOperationInsert;
  SequenceOperationDelete.prototype = Object.create(SequenceOperation.prototype);
  SequenceOperationDelete.prototype.constructor = SequenceOperationDelete;
  SequenceOperationMove.prototype = Object.create(SequenceOperation.prototype);
  SequenceOperationMove.prototype.constructor = SequenceOperationMove;
  function ChainedUpstream() {
  }
  ChainedUpstream.prototype.deliver_8lzwlo$ = function (op) {
    this.process_6qjbx6$(IdChain_init_0([]), op);
  };
  function ChainedUpstream$child$ObjectLiteral(this$ChainedUpstream, closure$additionalId) {
    this.this$ChainedUpstream = this$ChainedUpstream;
    this.closure$additionalId = closure$additionalId;
    ChainedUpstream.call(this);
  }
  ChainedUpstream$child$ObjectLiteral.prototype.process_6qjbx6$ = function (id, op) {
    this.this$ChainedUpstream.process_6qjbx6$(new IdChain(plus(listOf(this.closure$additionalId), id.chain)), op);
  };
  ChainedUpstream$child$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ChainedUpstream]
  };
  ChainedUpstream.prototype.child_61zpoe$ = function (additionalId) {
    return new ChainedUpstream$child$ObjectLiteral(this, additionalId);
  };
  ChainedUpstream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChainedUpstream',
    interfaces: [Upstream]
  };
  function ClientGateway() {
  }
  ClientGateway.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ClientGateway',
    interfaces: []
  };
  function ClientNode(site) {
    this.context_0 = new DefaultContext(site);
    this.upstream_0 = new ClientNode$Upstream(this);
    this.logUpstream_0 = new ClientNode$LogSyncUpstream(this);
    this.serializer_0 = new SerializationManager(this.context_0);
    this.gateway_k85e0t$_0 = this.gateway_k85e0t$_0;
    this.currentPrototype_0 = null;
    this.currentPrototypeId_0 = null;
    this.requestedPrototypeId_0 = null;
    this.pendingPrototypeCallbacks_0 = ArrayList_init();
  }
  Object.defineProperty(ClientNode.prototype, 'gateway_0', {
    get: function () {
      if (this.gateway_k85e0t$_0 == null)
        return throwUPAE('gateway');
      return this.gateway_k85e0t$_0;
    },
    set: function (gateway) {
      this.gateway_k85e0t$_0 = gateway;
    }
  });
  ClientNode.prototype.getPrototype = function (id, callback) {
    if (equals(this.currentPrototypeId_0, id)) {
      callback(this.currentPrototype_0);
    } else {
      if (!equals(this.requestedPrototypeId_0, id)) {
        this.pendingPrototypeCallbacks_0.clear();
        this.requestedPrototypeId_0 = id;
        this.pendingPrototypeCallbacks_0.add_11rb$(callback);
        this.gateway_0.load(id);
      } else {
        this.pendingPrototypeCallbacks_0.add_11rb$(callback);
      }
    }
  };
  function ClientNode$setGateway$lambda(this$ClientNode) {
    return function (update) {
      var upd = this$ClientNode.serializer_0.deserializeUpdate_61zpoe$(update);
      this$ClientNode.processUpdate_0(upd);
      return Unit;
    };
  }
  function ClientNode$setGateway$lambda_0(this$ClientNode) {
    return function (id, proto) {
      var tmp$;
      tmp$ = proto != null ? this$ClientNode.serializer_0.deserializePrototype_61zpoe$(proto) : null;
      var prototype = tmp$;
      this$ClientNode.receivePrototype_0(id, prototype);
      return Unit;
    };
  }
  ClientNode.prototype.setGateway = function (g) {
    g.subscribe(ClientNode$setGateway$lambda(this));
    g.setReceiver(ClientNode$setGateway$lambda_0(this));
    this.gateway_0 = g;
  };
  ClientNode.prototype.processUpdate_0 = function (update) {
    var tmp$;
    if (!update.id.hasNext)
      return;
    if (!equals(this.currentPrototypeId_0, update.id.shift()))
      return;
    (tmp$ = this.currentPrototype_0) != null ? (tmp$.processUpdate_rsal8a$(update), Unit) : null;
  };
  ClientNode.prototype.receivePrototype_0 = function (id, proto) {
    var tmp$;
    if (!equals(id, this.requestedPrototypeId_0))
      return;
    this.currentPrototype_0 = proto;
    this.currentPrototypeId_0 = this.requestedPrototypeId_0;
    this.requestedPrototypeId_0 = null;
    if (proto != null) {
      proto.setUpstream_5q3qwm$(this.upstream_0.child_61zpoe$(id));
      proto.log_8be2vx$.setUpstream_iz29jp$(this.logUpstream_0);
      this.gateway_0.requestSync(id, this.serializer_0.serialize_bd7lk$(proto.log_8be2vx$.currentTimestamp));
    }tmp$ = this.pendingPrototypeCallbacks_0.iterator();
    while (tmp$.hasNext()) {
      var callback = tmp$.next();
      callback(proto);
    }
    this.pendingPrototypeCallbacks_0.clear();
  };
  function ClientNode$Upstream($outer) {
    this.$outer = $outer;
    ChainedUpstream.call(this);
  }
  ClientNode$Upstream.prototype.process_6qjbx6$ = function (id, op) {
    var tmp$;
    tmp$ = this.$outer.currentPrototype_0;
    if (tmp$ == null) {
      return;
    }var update = tmp$.log_8be2vx$.issueLocalUpdate_gzoil3$(id, new UpdatePayload(op));
    var serialized = this.$outer.serializer_0.serialize_ww7k4j$(update);
    this.$outer.gateway_0.publishUpdate(serialized);
  };
  ClientNode$Upstream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Upstream',
    interfaces: [ChainedUpstream]
  };
  function ClientNode$LogSyncUpstream($outer) {
    this.$outer = $outer;
  }
  ClientNode$LogSyncUpstream.prototype.save_ww7k4j$ = function (update) {
    var tmp$;
    if ((tmp$ = this.$outer.currentPrototype_0) != null) {
      this.$outer;
      var this$ClientNode = this.$outer;
      this$ClientNode.gateway_0.requestSync(ensureNotNull(this$ClientNode.currentPrototypeId_0), this$ClientNode.serializer_0.serialize_bd7lk$(tmp$.log_8be2vx$.currentTimestamp));
    }};
  ClientNode$LogSyncUpstream.prototype.restore_z0m90q$ = function (sinceRevision, maxCount) {
    return null;
  };
  ClientNode$LogSyncUpstream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogSyncUpstream',
    interfaces: [LogUpstream]
  };
  ClientNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClientNode',
    interfaces: []
  };
  function ContextualInjectorSerializer(localValue) {
    this.localValue_0 = localValue;
    this.descriptor_kglw6b$_0 = SerialDescriptor('ValueInjection', StructureKind.OBJECT);
  }
  Object.defineProperty(ContextualInjectorSerializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_kglw6b$_0;
    }
  });
  ContextualInjectorSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    decoder.beginStructure_r0sa6z$(this.descriptor, []).endStructure_qatsm0$(this.descriptor);
    return this.localValue_0;
  };
  ContextualInjectorSerializer.prototype.serialize_awe97i$ = function (encoder, value) {
    encoder.beginStructure_r0sa6z$(this.descriptor, []).endStructure_qatsm0$(this.descriptor);
  };
  ContextualInjectorSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContextualInjectorSerializer',
    interfaces: [KSerializer]
  };
  function LamportTimestamp(time, site) {
    LamportTimestamp$Companion_getInstance();
    this.time = time;
    this.site = site;
  }
  LamportTimestamp.prototype.compareTo_11rb$ = function (other) {
    return compareValuesBy(this, other, [getPropertyCallableRef('time', 1, function ($receiver) {
      return $receiver.time;
    }), getPropertyCallableRef('site', 1, function ($receiver) {
      return $receiver.site;
    })]);
  };
  function LamportTimestamp$Companion() {
    LamportTimestamp$Companion_instance = this;
  }
  LamportTimestamp$Companion.prototype.serializer = function () {
    return LamportTimestamp$$serializer_getInstance();
  };
  LamportTimestamp$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LamportTimestamp$Companion_instance = null;
  function LamportTimestamp$Companion_getInstance() {
    if (LamportTimestamp$Companion_instance === null) {
      new LamportTimestamp$Companion();
    }return LamportTimestamp$Companion_instance;
  }
  function LamportTimestamp$$serializer() {
    this.descriptor_ehsltv$_0 = new SerialClassDescImpl('raid.neuroide.reproto.crdt.LamportTimestamp', this, 2);
    this.descriptor.addElement_ivxn3r$('time', false);
    this.descriptor.addElement_ivxn3r$('site', false);
    LamportTimestamp$$serializer_instance = this;
  }
  Object.defineProperty(LamportTimestamp$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_ehsltv$_0;
    }
  });
  LamportTimestamp$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeLongElement_a3zgoj$(this.descriptor, 0, value.time);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, value.site);
    output.endStructure_qatsm0$(this.descriptor);
  };
  LamportTimestamp$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return LamportTimestamp_init(bitMask0, local0, local1, null);
  };
  LamportTimestamp$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, internal.StringSerializer];
  };
  LamportTimestamp$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var LamportTimestamp$$serializer_instance = null;
  function LamportTimestamp$$serializer_getInstance() {
    if (LamportTimestamp$$serializer_instance === null) {
      new LamportTimestamp$$serializer();
    }return LamportTimestamp$$serializer_instance;
  }
  function LamportTimestamp_init(seen1, time, site, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(LamportTimestamp.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('time');
    else
      $this.time = time;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('site');
    else
      $this.site = site;
    return $this;
  }
  LamportTimestamp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LamportTimestamp',
    interfaces: [Comparable]
  };
  LamportTimestamp.prototype.component1 = function () {
    return this.time;
  };
  LamportTimestamp.prototype.component2 = function () {
    return this.site;
  };
  LamportTimestamp.prototype.copy_a4hdmt$ = function (time, site) {
    return new LamportTimestamp(time === void 0 ? this.time : time, site === void 0 ? this.site : site);
  };
  LamportTimestamp.prototype.toString = function () {
    return 'LamportTimestamp(time=' + Kotlin.toString(this.time) + (', site=' + Kotlin.toString(this.site)) + ')';
  };
  LamportTimestamp.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    result = result * 31 + Kotlin.hashCode(this.site) | 0;
    return result;
  };
  LamportTimestamp.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.time, other.time) && Kotlin.equals(this.site, other.site)))));
  };
  function LamportClock(siteId) {
    LamportClock$Companion_getInstance();
    this.siteId_0 = siteId;
    this.time_0 = L0;
  }
  Object.defineProperty(LamportClock.prototype, 'value', {
    get: function () {
      return new LamportTimestamp(this.time_0, this.siteId_0.id);
    }
  });
  LamportClock.prototype.next = function () {
    return new LamportTimestamp((this.time_0 = this.time_0.inc(), this.time_0), this.siteId_0.id);
  };
  LamportClock.prototype.update_nc1914$ = function (timestamp) {
    var a = this.time_0;
    var b = timestamp.time;
    this.time_0 = a.compareTo_11rb$(b) >= 0 ? a : b;
  };
  function LamportClock$Companion() {
    LamportClock$Companion_instance = this;
  }
  LamportClock$Companion.prototype.serializer = function () {
    return LamportClock$$serializer_getInstance();
  };
  LamportClock$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LamportClock$Companion_instance = null;
  function LamportClock$Companion_getInstance() {
    if (LamportClock$Companion_instance === null) {
      new LamportClock$Companion();
    }return LamportClock$Companion_instance;
  }
  function LamportClock$$serializer() {
    this.descriptor_iwveyd$_0 = new SerialClassDescImpl('raid.neuroide.reproto.crdt.LamportClock', this, 2);
    this.descriptor.addElement_ivxn3r$('siteId', false);
    this.descriptor.addElement_ivxn3r$('time', true);
    LamportClock$$serializer_instance = this;
  }
  Object.defineProperty(LamportClock$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_iwveyd$_0;
    }
  });
  LamportClock$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new ContextSerializer(getKClass(LocalSiteId)), value.siteId_0);
    if (!equals(value.time_0, L0) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeLongElement_a3zgoj$(this.descriptor, 1, value.time_0);
    output.endStructure_qatsm0$(this.descriptor);
  };
  LamportClock$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new ContextSerializer(getKClass(LocalSiteId))) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new ContextSerializer(getKClass(LocalSiteId)), local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeLongElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return LamportClock_init(bitMask0, local0, local1, null);
  };
  LamportClock$$serializer.prototype.childSerializers = function () {
    return [new ContextSerializer(getKClass(LocalSiteId)), internal.LongSerializer];
  };
  LamportClock$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var LamportClock$$serializer_instance = null;
  function LamportClock$$serializer_getInstance() {
    if (LamportClock$$serializer_instance === null) {
      new LamportClock$$serializer();
    }return LamportClock$$serializer_instance;
  }
  function LamportClock_init(seen1, siteId, time, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(LamportClock.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('siteId');
    else
      $this.siteId_0 = siteId;
    if ((seen1 & 2) === 0)
      $this.time_0 = L0;
    else
      $this.time_0 = time;
    return $this;
  }
  LamportClock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LamportClock',
    interfaces: []
  };
  function PlainClock() {
    PlainClock$Companion_getInstance();
    this.time_0 = L0;
  }
  Object.defineProperty(PlainClock.prototype, 'value', {
    get: function () {
      return this.time_0;
    }
  });
  PlainClock.prototype.next = function () {
    return this.time_0 = this.time_0.inc(), this.time_0;
  };
  function PlainClock$Companion() {
    PlainClock$Companion_instance = this;
  }
  PlainClock$Companion.prototype.serializer = function () {
    return PlainClock$$serializer_getInstance();
  };
  PlainClock$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PlainClock$Companion_instance = null;
  function PlainClock$Companion_getInstance() {
    if (PlainClock$Companion_instance === null) {
      new PlainClock$Companion();
    }return PlainClock$Companion_instance;
  }
  function PlainClock$$serializer() {
    this.descriptor_ma04po$_0 = new SerialClassDescImpl('raid.neuroide.reproto.crdt.PlainClock', this, 1);
    this.descriptor.addElement_ivxn3r$('time', true);
    PlainClock$$serializer_instance = this;
  }
  Object.defineProperty(PlainClock$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_ma04po$_0;
    }
  });
  PlainClock$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(value.time_0, L0) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, value.time_0);
    output.endStructure_qatsm0$(this.descriptor);
  };
  PlainClock$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return PlainClock_init(bitMask0, local0, null);
  };
  PlainClock$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer];
  };
  PlainClock$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var PlainClock$$serializer_instance = null;
  function PlainClock$$serializer_getInstance() {
    if (PlainClock$$serializer_instance === null) {
      new PlainClock$$serializer();
    }return PlainClock$$serializer_instance;
  }
  function PlainClock_init(seen1, time, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(PlainClock.prototype);
    if ((seen1 & 1) === 0)
      $this.time_0 = L0;
    else
      $this.time_0 = time;
    return $this;
  }
  PlainClock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlainClock',
    interfaces: []
  };
  function VectorTimestamp(times) {
    VectorTimestamp$Companion_getInstance();
    this.times = times;
  }
  VectorTimestamp.prototype.tryCompareTo_bd7lk$ = function (other) {
    var tmp$, tmp$_0, tmp$_1;
    var sites = plus_0(this.times.keys, other.times.keys);
    var result = 0;
    tmp$ = sites.iterator();
    while (tmp$.hasNext()) {
      var site = tmp$.next();
      var curResult = compareValues((tmp$_0 = this.times.get_11rb$(site)) != null ? tmp$_0 : 0, (tmp$_1 = other.times.get_11rb$(site)) != null ? tmp$_1 : 0);
      if (result === 0) {
        result = curResult;
      } else if (curResult !== result) {
        return null;
      }}
    return result;
  };
  VectorTimestamp.prototype.compareTo_11rb$ = function (other) {
    var tmp$;
    tmp$ = this.tryCompareTo_bd7lk$(other);
    if (tmp$ == null) {
      throw new IncomparableException();
    }return tmp$;
  };
  VectorTimestamp.prototype.get_61zpoe$ = function (site) {
    var tmp$;
    return (tmp$ = this.times.get_11rb$(site)) != null ? tmp$ : 0;
  };
  function VectorTimestamp$Companion() {
    VectorTimestamp$Companion_instance = this;
  }
  VectorTimestamp$Companion.prototype.areComparable_ueywc$ = function (a, b) {
    return a.tryCompareTo_bd7lk$(b) != null;
  };
  VectorTimestamp$Companion.prototype.serializer = function () {
    return VectorTimestamp$$serializer_getInstance();
  };
  VectorTimestamp$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var VectorTimestamp$Companion_instance = null;
  function VectorTimestamp$Companion_getInstance() {
    if (VectorTimestamp$Companion_instance === null) {
      new VectorTimestamp$Companion();
    }return VectorTimestamp$Companion_instance;
  }
  function VectorTimestamp$$serializer() {
    this.descriptor_eutwhv$_0 = new SerialClassDescImpl('raid.neuroide.reproto.crdt.VectorTimestamp', this, 1);
    this.descriptor.addElement_ivxn3r$('times', false);
    VectorTimestamp$$serializer_instance = this;
  }
  Object.defineProperty(VectorTimestamp$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_eutwhv$_0;
    }
  });
  VectorTimestamp$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new LinkedHashMapSerializer(internal.StringSerializer, internal.IntSerializer), value.times);
    output.endStructure_qatsm0$(this.descriptor);
  };
  VectorTimestamp$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new LinkedHashMapSerializer(internal.StringSerializer, internal.IntSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new LinkedHashMapSerializer(internal.StringSerializer, internal.IntSerializer), local0);
          bitMask0 |= 1;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return VectorTimestamp_init(bitMask0, local0, null);
  };
  VectorTimestamp$$serializer.prototype.childSerializers = function () {
    return [new LinkedHashMapSerializer(internal.StringSerializer, internal.IntSerializer)];
  };
  VectorTimestamp$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var VectorTimestamp$$serializer_instance = null;
  function VectorTimestamp$$serializer_getInstance() {
    if (VectorTimestamp$$serializer_instance === null) {
      new VectorTimestamp$$serializer();
    }return VectorTimestamp$$serializer_instance;
  }
  function VectorTimestamp_init(seen1, times, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(VectorTimestamp.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('times');
    else
      $this.times = times;
    return $this;
  }
  VectorTimestamp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VectorTimestamp',
    interfaces: [Comparable]
  };
  VectorTimestamp.prototype.component1 = function () {
    return this.times;
  };
  VectorTimestamp.prototype.copy_x7z4g5$ = function (times) {
    return new VectorTimestamp(times === void 0 ? this.times : times);
  };
  VectorTimestamp.prototype.toString = function () {
    return 'VectorTimestamp(times=' + Kotlin.toString(this.times) + ')';
  };
  VectorTimestamp.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.times) | 0;
    return result;
  };
  VectorTimestamp.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.times, other.times))));
  };
  function VectorClock(siteId) {
    VectorClock$Companion_getInstance();
    this.siteId_0 = siteId;
    var tmp$, tmp$_0;
    this.times_0 = mutableMapOf([to((tmp$_0 = (tmp$ = this != null ? this.siteId_0 : null) != null ? tmp$.id : null) != null ? tmp$_0 : '', 0)]);
  }
  Object.defineProperty(VectorClock.prototype, 'value', {
    get: function () {
      return new VectorTimestamp(this.times_0);
    }
  });
  VectorClock.prototype.next = function () {
    var tmp$;
    var $receiver = this.times_0;
    var key = this.siteId_0.id;
    var value = ((tmp$ = this.times_0.get_11rb$(this.siteId_0.id)) != null ? tmp$ : 0) + 1 | 0;
    $receiver.put_xwzc9p$(key, value);
    return this.value;
  };
  VectorClock.prototype.update_bd7lk$ = function (timestamp) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = timestamp.times.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_2 = tmp$.next();
      var site = tmp$_2.key;
      var time = tmp$_2.value;
      tmp$_1 = (tmp$_0 = this.times_0.get_11rb$(site)) != null ? tmp$_0 : 0;
      var tmp$_3 = this.times_0;
      var value = Math_0.max(tmp$_1, time);
      tmp$_3.put_xwzc9p$(site, value);
    }
  };
  function VectorClock$Companion() {
    VectorClock$Companion_instance = this;
  }
  VectorClock$Companion.prototype.serializer = function () {
    return VectorClock$$serializer_getInstance();
  };
  VectorClock$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var VectorClock$Companion_instance = null;
  function VectorClock$Companion_getInstance() {
    if (VectorClock$Companion_instance === null) {
      new VectorClock$Companion();
    }return VectorClock$Companion_instance;
  }
  function VectorClock$$serializer() {
    this.descriptor_d53yut$_0 = new SerialClassDescImpl('raid.neuroide.reproto.crdt.VectorClock', this, 2);
    this.descriptor.addElement_ivxn3r$('siteId', false);
    this.descriptor.addElement_ivxn3r$('times', true);
    VectorClock$$serializer_instance = this;
  }
  Object.defineProperty(VectorClock$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_d53yut$_0;
    }
  });
  VectorClock$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = to((tmp$_0 = (tmp$ = this != null ? this.siteId_0 : null) != null ? tmp$.id : null) != null ? tmp$_0 : '', 0);
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new ContextSerializer(getKClass(LocalSiteId)), value.siteId_0);
    if (!equals(value.times_0, mutableMapOf([tmp$_1])) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeSerializableElement_blecud$(this.descriptor, 1, new LinkedHashMapSerializer(internal.StringSerializer, internal.IntSerializer), value.times_0);
    output.endStructure_qatsm0$(this.descriptor);
  };
  VectorClock$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new ContextSerializer(getKClass(LocalSiteId))) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new ContextSerializer(getKClass(LocalSiteId)), local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, new LinkedHashMapSerializer(internal.StringSerializer, internal.IntSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, new LinkedHashMapSerializer(internal.StringSerializer, internal.IntSerializer), local1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return VectorClock_init(bitMask0, local0, local1, null);
  };
  VectorClock$$serializer.prototype.childSerializers = function () {
    return [new ContextSerializer(getKClass(LocalSiteId)), new LinkedHashMapSerializer(internal.StringSerializer, internal.IntSerializer)];
  };
  VectorClock$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var VectorClock$$serializer_instance = null;
  function VectorClock$$serializer_getInstance() {
    if (VectorClock$$serializer_instance === null) {
      new VectorClock$$serializer();
    }return VectorClock$$serializer_instance;
  }
  function VectorClock_init(seen1, siteId, times, serializationConstructorMarker) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = to((tmp$_0 = (tmp$ = $this != null ? $this.siteId_0 : null) != null ? tmp$.id : null) != null ? tmp$_0 : '', 0);
    var $this = serializationConstructorMarker || Object.create(VectorClock.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('siteId');
    else
      $this.siteId_0 = siteId;
    if ((seen1 & 2) === 0)
      $this.times_0 = mutableMapOf([tmp$_1]);
    else
      $this.times_0 = times;
    return $this;
  }
  VectorClock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VectorClock',
    interfaces: []
  };
  function Operation() {
  }
  Operation.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Operation',
    interfaces: []
  };
  function Upstream() {
  }
  Upstream.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Upstream',
    interfaces: []
  };
  function Crdt() {
    this.myUpstream = null;
  }
  Crdt.prototype.setUpstream_uy2x1y$ = function (upstream) {
    this.myUpstream = upstream;
  };
  Crdt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Crdt',
    interfaces: []
  };
  function LocalSiteId(id) {
    LocalSiteId$Companion_getInstance();
    this.id = id;
  }
  function LocalSiteId$Companion() {
    LocalSiteId$Companion_instance = this;
  }
  LocalSiteId$Companion.prototype.serializer = function () {
    return new ContextSerializer(getKClass(LocalSiteId));
  };
  LocalSiteId$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LocalSiteId$Companion_instance = null;
  function LocalSiteId$Companion_getInstance() {
    if (LocalSiteId$Companion_instance === null) {
      new LocalSiteId$Companion();
    }return LocalSiteId$Companion_instance;
  }
  LocalSiteId.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocalSiteId',
    interfaces: []
  };
  LocalSiteId.prototype.component1 = function () {
    return this.id;
  };
  LocalSiteId.prototype.copy_61zpoe$ = function (id) {
    return new LocalSiteId(id === void 0 ? this.id : id);
  };
  LocalSiteId.prototype.toString = function () {
    return 'LocalSiteId(id=' + Kotlin.toString(this.id) + ')';
  };
  LocalSiteId.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  LocalSiteId.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function getCrdtSerializers$lambda$lambda($receiver) {
    $receiver.with_kmpi2j$(getKClass(LWWRegister$LWWRegisterSet), LWWRegister$LWWRegisterSet$Companion_getInstance().serializer());
    $receiver.with_kmpi2j$(getKClass(SequenceOperationInsert), SequenceOperationInsert$Companion_getInstance().serializer());
    $receiver.with_kmpi2j$(getKClass(SequenceOperationDelete), SequenceOperationDelete$Companion_getInstance().serializer());
    $receiver.with_kmpi2j$(getKClass(SequenceOperationMove), SequenceOperationMove$Companion_getInstance().serializer());
    return Unit;
  }
  function getCrdtSerializers$lambda$lambda_0($receiver) {
    $receiver.with_kmpi2j$(getKClass(LogootStrategy), LogootStrategy_getInstance().serializer());
    return Unit;
  }
  function getCrdtSerializers$lambda(closure$siteId) {
    return function ($receiver) {
      $receiver.contextual_cfhkba$(getKClass(LocalSiteId), new ContextualInjectorSerializer(closure$siteId));
      $receiver.polymorphic_myr6su$(getKClass(Operation), [], getCrdtSerializers$lambda$lambda);
      $receiver.polymorphic_myr6su$(getKClass(AllocationStrategy), [], getCrdtSerializers$lambda$lambda_0);
      return Unit;
    };
  }
  function getCrdtSerializers(siteId) {
    return SerializersModule(getCrdtSerializers$lambda(siteId));
  }
  function cast($receiver) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver, KSerializer) ? tmp$ : throwCCE();
  }
  function IncomparableException() {
    RuntimeException_init('Objects are not comparable', this);
    this.name = 'IncomparableException';
  }
  IncomparableException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IncomparableException',
    interfaces: [RuntimeException]
  };
  function LWWRegister(payload, clock) {
    LWWRegister$Companion_getInstance();
    ObservableCrdt.call(this);
    this.payload_0 = payload;
    this.clock_0 = clock;
    this.time_0 = this.clock_0.next();
  }
  Object.defineProperty(LWWRegister.prototype, 'value', {
    get: function () {
      return this.payload_0;
    },
    set: function (newValue) {
      this.time_0 = this.clock_0.next();
      this.payload_0 = newValue;
      this.fire_11rb$(Unit);
      this.sendUpstream_0();
    }
  });
  LWWRegister.prototype.sendUpstream_0 = function () {
    var tmp$;
    (tmp$ = this.myUpstream) != null ? (tmp$.deliver_8lzwlo$(new LWWRegister$LWWRegisterSet(this.payload_0, this.time_0)), Unit) : null;
  };
  LWWRegister.prototype.deliver_8lzwlo$ = function (op) {
    var tmp$, tmp$_0;
    tmp$_0 = Kotlin.isType(tmp$ = op, LWWRegister$LWWRegisterSet) ? tmp$ : null;
    if (tmp$_0 == null) {
      return;
    }var operation = tmp$_0;
    if (operation.time.compareTo_11rb$(this.time_0) <= 0)
      return;
    this.payload_0 = operation.value;
    this.time_0 = operation.time;
    this.clock_0.update_nc1914$(operation.time);
    this.fire_11rb$(Unit);
  };
  function LWWRegister$LWWRegisterSet(value, time) {
    LWWRegister$LWWRegisterSet$Companion_getInstance();
    this.value = value;
    this.time = time;
  }
  function LWWRegister$LWWRegisterSet$Companion() {
    LWWRegister$LWWRegisterSet$Companion_instance = this;
  }
  LWWRegister$LWWRegisterSet$Companion.prototype.serializer = function () {
    return LWWRegister$LWWRegisterSet$$serializer_getInstance();
  };
  LWWRegister$LWWRegisterSet$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LWWRegister$LWWRegisterSet$Companion_instance = null;
  function LWWRegister$LWWRegisterSet$Companion_getInstance() {
    if (LWWRegister$LWWRegisterSet$Companion_instance === null) {
      new LWWRegister$LWWRegisterSet$Companion();
    }return LWWRegister$LWWRegisterSet$Companion_instance;
  }
  function LWWRegister$LWWRegisterSet$$serializer() {
    this.descriptor_a1iaha$_0 = new SerialClassDescImpl('raid.neuroide.reproto.crdt.LWWRegister.LWWRegisterSet', this, 2);
    this.descriptor.addElement_ivxn3r$('value', false);
    this.descriptor.addElement_ivxn3r$('time', false);
    LWWRegister$LWWRegisterSet$$serializer_instance = this;
  }
  Object.defineProperty(LWWRegister$LWWRegisterSet$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_a1iaha$_0;
    }
  });
  LWWRegister$LWWRegisterSet$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, value.value);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, LamportTimestamp$$serializer_getInstance(), value.time);
    output.endStructure_qatsm0$(this.descriptor);
  };
  LWWRegister$LWWRegisterSet$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, LamportTimestamp$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, LamportTimestamp$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return LWWRegister$LWWRegister$LWWRegisterSet_init(bitMask0, local0, local1, null);
  };
  LWWRegister$LWWRegisterSet$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, LamportTimestamp$$serializer_getInstance()];
  };
  LWWRegister$LWWRegisterSet$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var LWWRegister$LWWRegisterSet$$serializer_instance = null;
  function LWWRegister$LWWRegisterSet$$serializer_getInstance() {
    if (LWWRegister$LWWRegisterSet$$serializer_instance === null) {
      new LWWRegister$LWWRegisterSet$$serializer();
    }return LWWRegister$LWWRegisterSet$$serializer_instance;
  }
  function LWWRegister$LWWRegister$LWWRegisterSet_init(seen1, value, time, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(LWWRegister$LWWRegisterSet.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('value');
    else
      $this.value = value;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('time');
    else
      $this.time = time;
    return $this;
  }
  LWWRegister$LWWRegisterSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LWWRegisterSet',
    interfaces: [Operation]
  };
  LWWRegister$LWWRegisterSet.prototype.component1 = function () {
    return this.value;
  };
  LWWRegister$LWWRegisterSet.prototype.component2 = function () {
    return this.time;
  };
  LWWRegister$LWWRegisterSet.prototype.copy_x23lrq$ = function (value, time) {
    return new LWWRegister$LWWRegisterSet(value === void 0 ? this.value : value, time === void 0 ? this.time : time);
  };
  LWWRegister$LWWRegisterSet.prototype.toString = function () {
    return 'LWWRegisterSet(value=' + Kotlin.toString(this.value) + (', time=' + Kotlin.toString(this.time)) + ')';
  };
  LWWRegister$LWWRegisterSet.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    return result;
  };
  LWWRegister$LWWRegisterSet.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.value, other.value) && Kotlin.equals(this.time, other.time)))));
  };
  function LWWRegister$Companion() {
    LWWRegister$Companion_instance = this;
  }
  LWWRegister$Companion.prototype.serializer = function () {
    return LWWRegister$$serializer_getInstance();
  };
  LWWRegister$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LWWRegister$Companion_instance = null;
  function LWWRegister$Companion_getInstance() {
    if (LWWRegister$Companion_instance === null) {
      new LWWRegister$Companion();
    }return LWWRegister$Companion_instance;
  }
  function LWWRegister$$serializer() {
    this.descriptor_wjprjt$_0 = new SerialClassDescImpl('raid.neuroide.reproto.crdt.LWWRegister', this, 3);
    this.descriptor.addElement_ivxn3r$('payload', false);
    this.descriptor.addElement_ivxn3r$('clock', false);
    this.descriptor.addElement_ivxn3r$('time', true);
    LWWRegister$$serializer_instance = this;
  }
  Object.defineProperty(LWWRegister$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_wjprjt$_0;
    }
  });
  LWWRegister$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, value.payload_0);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, LamportClock$$serializer_getInstance(), value.clock_0);
    if (!equals(value.time_0, this.clock_0.next()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeSerializableElement_blecud$(this.descriptor, 2, LamportTimestamp$$serializer_getInstance(), value.time_0);
    output.endStructure_qatsm0$(this.descriptor);
  };
  LWWRegister$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, LamportClock$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, LamportClock$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, LamportTimestamp$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, LamportTimestamp$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return LWWRegister_init(bitMask0, local0, local1, local2, null);
  };
  LWWRegister$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, LamportClock$$serializer_getInstance(), LamportTimestamp$$serializer_getInstance()];
  };
  LWWRegister$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var LWWRegister$$serializer_instance = null;
  function LWWRegister$$serializer_getInstance() {
    if (LWWRegister$$serializer_instance === null) {
      new LWWRegister$$serializer();
    }return LWWRegister$$serializer_instance;
  }
  function LWWRegister_init(seen1, payload, clock, time, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(LWWRegister.prototype);
    ObservableCrdt.call($this);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('payload');
    else
      $this.payload_0 = payload;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('clock');
    else
      $this.clock_0 = clock;
    if ((seen1 & 4) === 0)
      $this.time_0 = $this.clock_0.next();
    else
      $this.time_0 = time;
    return $this;
  }
  LWWRegister.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LWWRegister',
    interfaces: [ObservableCrdt]
  };
  function LWWRegister_init_0(payload, siteId, $this) {
    $this = $this || Object.create(LWWRegister.prototype);
    LWWRegister.call($this, payload, new LamportClock(siteId));
    return $this;
  }
  function ObservableCrdt() {
    Crdt.call(this);
    this.listener_7r0sad$_0 = null;
  }
  ObservableCrdt.prototype.setListener_rslci1$ = function (l) {
    this.listener_7r0sad$_0 = l;
  };
  ObservableCrdt.prototype.fire_11rb$ = function (change) {
    var tmp$;
    (tmp$ = this.listener_7r0sad$_0) != null ? tmp$(change) : null;
  };
  ObservableCrdt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObservableCrdt',
    interfaces: [Crdt]
  };
  function TypedAlias(sourceProperty) {
    this.sourceProperty_0 = sourceProperty;
  }
  TypedAlias.prototype.getValue_n5byny$ = function (thisRef, property) {
    return this.deserialize_11rb$(this.sourceProperty_0.get());
  };
  TypedAlias.prototype.setValue_sq4zia$ = function (thisRef, property, value) {
    this.sourceProperty_0.set(this.serialize_11rc$(value));
  };
  TypedAlias.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TypedAlias',
    interfaces: []
  };
  function IntAlias(sourceProperty) {
    TypedAlias.call(this, sourceProperty);
  }
  IntAlias.prototype.serialize_11rc$ = function (v) {
    return v.toString();
  };
  IntAlias.prototype.deserialize_11rb$ = function (v) {
    return v.length === 0 ? 0 : toInt(v);
  };
  IntAlias.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntAlias',
    interfaces: [TypedAlias]
  };
  function LongAlias(sourceProperty) {
    TypedAlias.call(this, sourceProperty);
  }
  LongAlias.prototype.serialize_11rc$ = function (v) {
    return v.toString();
  };
  LongAlias.prototype.deserialize_11rb$ = function (v) {
    return v.length === 0 ? L0 : toLong(v);
  };
  LongAlias.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LongAlias',
    interfaces: [TypedAlias]
  };
  function BooleanAlias(sourceProperty) {
    TypedAlias.call(this, sourceProperty);
  }
  BooleanAlias.prototype.serialize_11rc$ = function (v) {
    return (v ? 1 : 0).toString();
  };
  BooleanAlias.prototype.deserialize_11rb$ = function (v) {
    return v.length === 0 ? false : toInt(v) !== 0;
  };
  BooleanAlias.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BooleanAlias',
    interfaces: [TypedAlias]
  };
  function RegisterWrapper(register) {
    this.register_0 = register;
    this.intValue_boyqxt$_0 = new IntAlias(getPropertyCallableRef('value', 0, function ($receiver) {
      return $receiver.value;
    }.bind(null, this), function ($receiver, value) {
      $receiver.value = value;
    }.bind(null, this)));
    this.longValue_o7u67y$_0 = new LongAlias(getPropertyCallableRef('value', 0, function ($receiver) {
      return $receiver.value;
    }.bind(null, this), function ($receiver, value) {
      $receiver.value = value;
    }.bind(null, this)));
    this.booleanValue_4cxp20$_0 = new BooleanAlias(getPropertyCallableRef('value', 0, function ($receiver) {
      return $receiver.value;
    }.bind(null, this), function ($receiver, value) {
      $receiver.value = value;
    }.bind(null, this)));
  }
  Object.defineProperty(RegisterWrapper.prototype, 'value', {
    get: function () {
      return this.register_0.value;
    },
    set: function (value) {
      this.register_0.value = value;
    }
  });
  var RegisterWrapper$intValue_metadata = new PropertyMetadata('intValue');
  Object.defineProperty(RegisterWrapper.prototype, 'intValue', {
    get: function () {
      return this.intValue_boyqxt$_0.getValue_n5byny$(this, RegisterWrapper$intValue_metadata);
    },
    set: function (intValue) {
      this.intValue_boyqxt$_0.setValue_sq4zia$(this, RegisterWrapper$intValue_metadata, intValue);
    }
  });
  var RegisterWrapper$longValue_metadata = new PropertyMetadata('longValue');
  Object.defineProperty(RegisterWrapper.prototype, 'longValue', {
    get: function () {
      return this.longValue_o7u67y$_0.getValue_n5byny$(this, RegisterWrapper$longValue_metadata);
    },
    set: function (longValue) {
      this.longValue_o7u67y$_0.setValue_sq4zia$(this, RegisterWrapper$longValue_metadata, longValue);
    }
  });
  var RegisterWrapper$booleanValue_metadata = new PropertyMetadata('booleanValue');
  Object.defineProperty(RegisterWrapper.prototype, 'booleanValue', {
    get: function () {
      return this.booleanValue_4cxp20$_0.getValue_n5byny$(this, RegisterWrapper$booleanValue_metadata);
    },
    set: function (booleanValue) {
      this.booleanValue_4cxp20$_0.setValue_sq4zia$(this, RegisterWrapper$booleanValue_metadata, booleanValue);
    }
  });
  RegisterWrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RegisterWrapper',
    interfaces: []
  };
  function AllocationStrategy() {
  }
  AllocationStrategy.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AllocationStrategy',
    interfaces: []
  };
  function Change() {
  }
  function Change$Insert(position, value) {
    Change.call(this);
    this.position = position;
    this.value = value;
  }
  Change$Insert.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Insert',
    interfaces: [Change]
  };
  Change$Insert.prototype.component1 = function () {
    return this.position;
  };
  Change$Insert.prototype.component2 = function () {
    return this.value;
  };
  Change$Insert.prototype.copy_19mbxw$ = function (position, value) {
    return new Change$Insert(position === void 0 ? this.position : position, value === void 0 ? this.value : value);
  };
  Change$Insert.prototype.toString = function () {
    return 'Insert(position=' + Kotlin.toString(this.position) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  Change$Insert.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.position) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Change$Insert.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.position, other.position) && Kotlin.equals(this.value, other.value)))));
  };
  function Change$Delete(position, value) {
    Change.call(this);
    this.position = position;
    this.value = value;
  }
  Change$Delete.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Delete',
    interfaces: [Change]
  };
  Change$Delete.prototype.component1 = function () {
    return this.position;
  };
  Change$Delete.prototype.component2 = function () {
    return this.value;
  };
  Change$Delete.prototype.copy_19mbxw$ = function (position, value) {
    return new Change$Delete(position === void 0 ? this.position : position, value === void 0 ? this.value : value);
  };
  Change$Delete.prototype.toString = function () {
    return 'Delete(position=' + Kotlin.toString(this.position) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  Change$Delete.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.position) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Change$Delete.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.position, other.position) && Kotlin.equals(this.value, other.value)))));
  };
  function Change$Move(from, to, value) {
    Change.call(this);
    this.from = from;
    this.to = to;
    this.value = value;
  }
  Change$Move.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Move',
    interfaces: [Change]
  };
  Change$Move.prototype.component1 = function () {
    return this.from;
  };
  Change$Move.prototype.component2 = function () {
    return this.to;
  };
  Change$Move.prototype.component3 = function () {
    return this.value;
  };
  Change$Move.prototype.copy_98i29q$ = function (from, to, value) {
    return new Change$Move(from === void 0 ? this.from : from, to === void 0 ? this.to : to, value === void 0 ? this.value : value);
  };
  Change$Move.prototype.toString = function () {
    return 'Move(from=' + Kotlin.toString(this.from) + (', to=' + Kotlin.toString(this.to)) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  Change$Move.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.from) | 0;
    result = result * 31 + Kotlin.hashCode(this.to) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Change$Move.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.from, other.from) && Kotlin.equals(this.to, other.to) && Kotlin.equals(this.value, other.value)))));
  };
  Change.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Change',
    interfaces: []
  };
  function Doublet(index, site) {
    Doublet$Companion_getInstance();
    this.index = index;
    this.site = site;
  }
  Doublet.prototype.compareTo_11rb$ = function (other) {
    return compareValuesBy(this, other, [getPropertyCallableRef('index', 1, function ($receiver) {
      return $receiver.index;
    }), getPropertyCallableRef('site', 1, function ($receiver) {
      return $receiver.site;
    })]);
  };
  function Doublet$Companion() {
    Doublet$Companion_instance = this;
  }
  Doublet$Companion.prototype.serializer = function () {
    return Doublet$$serializer_getInstance();
  };
  Doublet$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Doublet$Companion_instance = null;
  function Doublet$Companion_getInstance() {
    if (Doublet$Companion_instance === null) {
      new Doublet$Companion();
    }return Doublet$Companion_instance;
  }
  function Doublet$$serializer() {
    this.descriptor_ro1ag2$_0 = new SerialClassDescImpl('raid.neuroide.reproto.crdt.seq.Doublet', this, 2);
    this.descriptor.addElement_ivxn3r$('index', false);
    this.descriptor.addElement_ivxn3r$('site', false);
    Doublet$$serializer_instance = this;
  }
  Object.defineProperty(Doublet$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_ro1ag2$_0;
    }
  });
  Doublet$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeIntElement_4wpqag$(this.descriptor, 0, value.index);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, value.site);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Doublet$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Doublet_init(bitMask0, local0, local1, null);
  };
  Doublet$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.StringSerializer];
  };
  Doublet$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Doublet$$serializer_instance = null;
  function Doublet$$serializer_getInstance() {
    if (Doublet$$serializer_instance === null) {
      new Doublet$$serializer();
    }return Doublet$$serializer_instance;
  }
  function Doublet_init(seen1, index, site, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Doublet.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('index');
    else
      $this.index = index;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('site');
    else
      $this.site = site;
    return $this;
  }
  Doublet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Doublet',
    interfaces: [Comparable]
  };
  Doublet.prototype.component1 = function () {
    return this.index;
  };
  Doublet.prototype.component2 = function () {
    return this.site;
  };
  Doublet.prototype.copy_19mbxw$ = function (index, site) {
    return new Doublet(index === void 0 ? this.index : index, site === void 0 ? this.site : site);
  };
  Doublet.prototype.toString = function () {
    return 'Doublet(index=' + Kotlin.toString(this.index) + (', site=' + Kotlin.toString(this.site)) + ')';
  };
  Doublet.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    result = result * 31 + Kotlin.hashCode(this.site) | 0;
    return result;
  };
  Doublet.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.index, other.index) && Kotlin.equals(this.site, other.site)))));
  };
  function Identifier(position, clock) {
    Identifier$Companion_getInstance();
    this.position = position;
    this.clock = clock;
  }
  Identifier.prototype.compareTo_11rb$ = function (other) {
    var a = this.position.size;
    var b = other.position.size;
    var maxlen = Math_0.max(a, b);
    for (var i = 0; i < maxlen; i++) {
      if (i >= this.position.size)
        return -1;
      if (i >= other.position.size)
        return 1;
      var cmp = this.position.get_za3lpa$(i).compareTo_11rb$(other.position.get_za3lpa$(i));
      if (cmp !== 0)
        return cmp;
    }
    return compareValues(this.clock, other.clock);
  };
  function Identifier$Companion() {
    Identifier$Companion_instance = this;
  }
  Identifier$Companion.prototype.serializer = function () {
    return Identifier$$serializer_getInstance();
  };
  Identifier$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Identifier$Companion_instance = null;
  function Identifier$Companion_getInstance() {
    if (Identifier$Companion_instance === null) {
      new Identifier$Companion();
    }return Identifier$Companion_instance;
  }
  function Identifier$$serializer() {
    this.descriptor_7bgd9k$_0 = new SerialClassDescImpl('raid.neuroide.reproto.crdt.seq.Identifier', this, 2);
    this.descriptor.addElement_ivxn3r$('position', false);
    this.descriptor.addElement_ivxn3r$('clock', false);
    Identifier$$serializer_instance = this;
  }
  Object.defineProperty(Identifier$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_7bgd9k$_0;
    }
  });
  Identifier$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new ArrayListSerializer(Doublet$$serializer_getInstance()), value.position);
    output.encodeLongElement_a3zgoj$(this.descriptor, 1, value.clock);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Identifier$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new ArrayListSerializer(Doublet$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new ArrayListSerializer(Doublet$$serializer_getInstance()), local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeLongElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Identifier_init(bitMask0, local0, local1, null);
  };
  Identifier$$serializer.prototype.childSerializers = function () {
    return [new ArrayListSerializer(Doublet$$serializer_getInstance()), internal.LongSerializer];
  };
  Identifier$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Identifier$$serializer_instance = null;
  function Identifier$$serializer_getInstance() {
    if (Identifier$$serializer_instance === null) {
      new Identifier$$serializer();
    }return Identifier$$serializer_instance;
  }
  function Identifier_init(seen1, position, clock, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Identifier.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('position');
    else
      $this.position = position;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('clock');
    else
      $this.clock = clock;
    return $this;
  }
  Identifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Identifier',
    interfaces: [Comparable]
  };
  Identifier.prototype.component1 = function () {
    return this.position;
  };
  Identifier.prototype.component2 = function () {
    return this.clock;
  };
  Identifier.prototype.copy_9olwrz$ = function (position, clock) {
    return new Identifier(position === void 0 ? this.position : position, clock === void 0 ? this.clock : clock);
  };
  Identifier.prototype.toString = function () {
    return 'Identifier(position=' + Kotlin.toString(this.position) + (', clock=' + Kotlin.toString(this.clock)) + ')';
  };
  Identifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.position) | 0;
    result = result * 31 + Kotlin.hashCode(this.clock) | 0;
    return result;
  };
  Identifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.position, other.position) && Kotlin.equals(this.clock, other.clock)))));
  };
  function indexAt($receiver, i) {
    if (i < $receiver.size) {
      return $receiver.get_za3lpa$(i).index;
    } else {
      return 0;
    }
  }
  function LogootStrategy() {
    LogootStrategy_instance = this;
  }
  LogootStrategy.prototype.allocatePosition_nscbr2$ = function (left, right, site) {
    var tmp$;
    var a = left.size;
    var b = right.size;
    var commonLen = Math_0.min(a, b);
    var level = 0;
    while (level < commonLen && ((tmp$ = left.get_za3lpa$(level)) != null ? tmp$.equals(right.get_za3lpa$(level)) : null)) {
      level = level + 1 | 0;
    }
    if (commonLen === left.size && commonLen === right.size && commonLen === level || (commonLen === level && left.size > right.size) || (level < commonLen && left.get_za3lpa$(level).compareTo_11rb$(right.get_za3lpa$(level)) > 0))
      throw IllegalArgumentException_init('left must be less than right');
    var space = indexAt(right, level) - indexAt(left, level) - 1 | 0;
    if (space < 1) {
      var b_0 = space;
      space = Math_0.max(0, b_0);
      while (space === 0) {
        level = level + 1 | 0;
        space = this.getLevelMax_0(level) - indexAt(left, level) + indexAt(right, level) | 0;
      }
    }var tmp$_0 = Random.Default;
    var a_0 = space;
    var b_1 = this.getLevelBoundary_0(level);
    var offset = tmp$_0.nextInt_za3lpa$(Math_0.min(a_0, b_1)) + 1 | 0;
    return this.materialize_0(left, right, level, offset, site);
  };
  LogootStrategy.prototype.getLevelMax_0 = function (level) {
    return 2147483647;
  };
  LogootStrategy.prototype.getLevelBoundary_0 = function (level) {
    return 20;
  };
  function LogootStrategy$materialize$lambda() {
    return 0;
  }
  LogootStrategy.prototype.materialize_0 = function (left, right, level, offset, site) {
    var destination = ArrayList_init_0(collectionSizeOrDefault(left, 10));
    var tmp$;
    tmp$ = left.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.index);
    }
    var tmp$_0 = generateSequence(LogootStrategy$materialize$lambda);
    var b = level - left.size + 1 | 0;
    var digits = toMutableList(plus_1(destination, take(tmp$_0, Math_0.max(0, b))));
    var leftTakenIndex = level;
    if ((this.getLevelMax_0(leftTakenIndex) - digits.get_za3lpa$(level) | 0) >= offset) {
      digits.set_wxm5ur$(leftTakenIndex, digits.get_za3lpa$(leftTakenIndex) + offset | 0);
    } else {
      digits.set_wxm5ur$(leftTakenIndex, digits.get_za3lpa$(leftTakenIndex) + (offset - this.getLevelMax_0(leftTakenIndex) - 1) | 0);
      leftTakenIndex = leftTakenIndex - 1 | 0;
      while (digits.get_za3lpa$(leftTakenIndex) === this.getLevelMax_0(leftTakenIndex)) {
        digits.set_wxm5ur$(leftTakenIndex, 0);
        leftTakenIndex = leftTakenIndex - 1 | 0;
      }
      digits.set_wxm5ur$(leftTakenIndex, digits.get_za3lpa$(leftTakenIndex) + 1 | 0);
    }
    var result = ArrayList_init();
    var i = 0;
    while (i < left.size && digits.get_za3lpa$(i) === left.get_za3lpa$(i).index) {
      result.add_11rb$(new Doublet(digits.get_za3lpa$(i), left.get_za3lpa$(i).site));
      i = i + 1 | 0;
    }
    while (i < right.size && digits.get_za3lpa$(i) === right.get_za3lpa$(i).index) {
      result.add_11rb$(new Doublet(right.get_za3lpa$(i).index, right.get_za3lpa$(i).site));
      i = i + 1 | 0;
    }
    while (i <= level) {
      result.add_11rb$(new Doublet(digits.get_za3lpa$(i), site));
      i = i + 1 | 0;
    }
    return result;
  };
  LogootStrategy.prototype.serializer = function () {
    return new ObjectSerializer('raid.neuroide.reproto.crdt.seq.LogootStrategy', LogootStrategy_getInstance());
  };
  LogootStrategy.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LogootStrategy',
    interfaces: [AllocationStrategy]
  };
  var LogootStrategy_instance = null;
  function LogootStrategy_getInstance() {
    if (LogootStrategy_instance === null) {
      new LogootStrategy();
    }return LogootStrategy_instance;
  }
  var LeftId;
  var RightId;
  function Sequence(siteId, strategy) {
    Sequence$Companion_getInstance();
    ObservableCrdt.call(this);
    this.siteId_0 = siteId;
    this.strategy_0 = strategy;
    this.elements_0 = mutableMapOf([to(LeftId, ''), to(RightId, '')]);
    this.clock_0 = new PlainClock();
    this._sortedIdentifiers_0 = null;
  }
  Object.defineProperty(Sequence.prototype, 'sortedIdentifiers_0', {
    get: function () {
      if (this._sortedIdentifiers_0 == null)
        this._sortedIdentifiers_0 = sorted(this.elements_0.keys);
      return ensureNotNull(this._sortedIdentifiers_0);
    }
  });
  Object.defineProperty(Sequence.prototype, 'content', {
    get: function () {
      var $receiver = this.sortedIdentifiers_0;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0;
        if ((tmp$_0 = (element != null ? element.equals(LeftId) : null) || (element != null ? element.equals(RightId) : null) ? null : this.elements_0.get_11rb$(element)) != null) {
          destination.add_11rb$(tmp$_0);
        }}
      return destination;
    }
  });
  Object.defineProperty(Sequence.prototype, 'size', {
    get: function () {
      return this.elements_0.size - 2 | 0;
    }
  });
  Sequence.prototype.get_za3lpa$ = function (index) {
    return this.content.get_za3lpa$(index);
  };
  Sequence.prototype.insert_19mbxw$ = function (index, content) {
    this.checkLimits_0(index, true);
    var lId = this.sortedIdentifiers_0.get_za3lpa$(index);
    var rId = this.sortedIdentifiers_0.get_za3lpa$(index + 1 | 0);
    var newId = this.allocateIdentifier_0(lId, rId);
    var op = new SequenceOperationInsert(newId, content);
    this.commitLocallyGenerated_0(op);
  };
  Sequence.prototype.delete_za3lpa$ = function (index) {
    this.checkLimits_0(index);
    var id = this.sortedIdentifiers_0.get_za3lpa$(index + 1 | 0);
    var op = new SequenceOperationDelete(id);
    this.commitLocallyGenerated_0(op);
  };
  Sequence.prototype.move_vux9f0$ = function (from, to) {
    this.checkLimits_0(from);
    this.checkLimits_0(to, true);
    var fromId = this.sortedIdentifiers_0.get_za3lpa$(from + 1 | 0);
    var toLId = this.sortedIdentifiers_0.get_za3lpa$(to);
    var toRId = this.sortedIdentifiers_0.get_za3lpa$(to + 1 | 0);
    var newId = this.allocateIdentifier_0(toLId, toRId);
    var op = new SequenceOperationMove(fromId, newId);
    this.commitLocallyGenerated_0(op);
  };
  Sequence.prototype.commitLocallyGenerated_0 = function (op) {
    var tmp$;
    this.deliver_8lzwlo$(op);
    (tmp$ = this.myUpstream) != null ? (tmp$.deliver_8lzwlo$(op), Unit) : null;
  };
  Sequence.prototype.checkLimits_0 = function (index, allowEnd) {
    if (allowEnd === void 0)
      allowEnd = false;
    var rightLimit = allowEnd ? this.size : this.size - 1 | 0;
    if (!(0 <= index && index <= rightLimit))
      throw IndexOutOfBoundsException_init();
  };
  Sequence.prototype.allocateIdentifier_0 = function (left, right) {
    var position = this.strategy_0.allocatePosition_nscbr2$(left.position, right.position, this.siteId_0.id);
    return new Identifier(position, this.clock_0.next());
  };
  Sequence.prototype.deliver_8lzwlo$ = function (op) {
    var tmp$, tmp$_0;
    this._sortedIdentifiers_0 = null;
    var operation = Kotlin.isType(tmp$ = op, SequenceOperation) ? tmp$ : throwCCE();
    if (Kotlin.isType(operation, SequenceOperationInsert)) {
      var pid = operation.component1()
      , content = operation.component2();
      var prev = this.elements_0.put_xwzc9p$(pid, content);
      if (!equals(prev, content)) {
        this.fire_11rb$(new Change$Insert(-1, content));
      }} else if (Kotlin.isType(operation, SequenceOperationDelete)) {
      var prev_0 = this.elements_0.remove_11rb$(operation.pid);
      if (prev_0 != null) {
        this.fire_11rb$(new Change$Delete(-1, prev_0));
      }} else if (Kotlin.isType(operation, SequenceOperationMove)) {
      if ((tmp$_0 = this.elements_0.get_11rb$(operation.pidFrom)) != null) {
        var $receiver = this.elements_0;
        var key = operation.pidTo;
        $receiver.put_xwzc9p$(key, tmp$_0);
        this.elements_0.remove_11rb$(operation.pidFrom);
        this.fire_11rb$(new Change$Move(-1, -1, tmp$_0));
      }} else
      return;
  };
  function Sequence$Companion() {
    Sequence$Companion_instance = this;
  }
  Sequence$Companion.prototype.serializer = function () {
    return Sequence$$serializer_getInstance();
  };
  Sequence$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Sequence$Companion_instance = null;
  function Sequence$Companion_getInstance() {
    if (Sequence$Companion_instance === null) {
      new Sequence$Companion();
    }return Sequence$Companion_instance;
  }
  function Sequence$$serializer() {
    this.descriptor_kmxmr4$_0 = new SerialClassDescImpl('raid.neuroide.reproto.crdt.seq.Sequence', this, 3);
    this.descriptor.addElement_ivxn3r$('siteId', false);
    this.descriptor.addElement_ivxn3r$('strategy', false);
    this.descriptor.addElement_ivxn3r$('elements', true);
    Sequence$$serializer_instance = this;
  }
  Object.defineProperty(Sequence$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_kmxmr4$_0;
    }
  });
  Sequence$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new ContextSerializer(getKClass(LocalSiteId)), value.siteId_0);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, new PolymorphicSerializer(getKClass(AllocationStrategy)), value.strategy_0);
    if (!equals(value.elements_0, mutableMapOf([to(LeftId, ''), to(RightId, '')])) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeSerializableElement_blecud$(this.descriptor, 2, new LinkedHashMapSerializer(Identifier$$serializer_getInstance(), internal.StringSerializer), value.elements_0);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Sequence$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new ContextSerializer(getKClass(LocalSiteId))) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new ContextSerializer(getKClass(LocalSiteId)), local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, new PolymorphicSerializer(getKClass(AllocationStrategy))) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, new PolymorphicSerializer(getKClass(AllocationStrategy)), local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, new LinkedHashMapSerializer(Identifier$$serializer_getInstance(), internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, new LinkedHashMapSerializer(Identifier$$serializer_getInstance(), internal.StringSerializer), local2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Sequence_init(bitMask0, local0, local1, local2, null);
  };
  Sequence$$serializer.prototype.childSerializers = function () {
    return [new ContextSerializer(getKClass(LocalSiteId)), new PolymorphicSerializer(getKClass(AllocationStrategy)), new LinkedHashMapSerializer(Identifier$$serializer_getInstance(), internal.StringSerializer)];
  };
  Sequence$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Sequence$$serializer_instance = null;
  function Sequence$$serializer_getInstance() {
    if (Sequence$$serializer_instance === null) {
      new Sequence$$serializer();
    }return Sequence$$serializer_instance;
  }
  function Sequence_init(seen1, siteId, strategy, elements, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Sequence.prototype);
    ObservableCrdt.call($this);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('siteId');
    else
      $this.siteId_0 = siteId;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('strategy');
    else
      $this.strategy_0 = strategy;
    if ((seen1 & 4) === 0)
      $this.elements_0 = mutableMapOf([to(LeftId, ''), to(RightId, '')]);
    else
      $this.elements_0 = elements;
    $this.clock_0 = new PlainClock();
    $this._sortedIdentifiers_0 = null;
    return $this;
  }
  Sequence.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sequence',
    interfaces: [ObservableCrdt]
  };
  function SequenceElement(pid, content) {
    SequenceElement$Companion_getInstance();
    this.pid = pid;
    this.content = content;
  }
  SequenceElement.prototype.compareTo_11rb$ = function (other) {
    return compareValuesBy(this, other, [getPropertyCallableRef('pid', 1, function ($receiver) {
      return $receiver.pid;
    }), getPropertyCallableRef('content', 1, function ($receiver) {
      return $receiver.content;
    })]);
  };
  function SequenceElement$Companion() {
    SequenceElement$Companion_instance = this;
  }
  SequenceElement$Companion.prototype.serializer = function () {
    return SequenceElement$$serializer_getInstance();
  };
  SequenceElement$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SequenceElement$Companion_instance = null;
  function SequenceElement$Companion_getInstance() {
    if (SequenceElement$Companion_instance === null) {
      new SequenceElement$Companion();
    }return SequenceElement$Companion_instance;
  }
  function SequenceElement$$serializer() {
    this.descriptor_igwkk6$_0 = new SerialClassDescImpl('raid.neuroide.reproto.crdt.seq.SequenceElement', this, 2);
    this.descriptor.addElement_ivxn3r$('pid', false);
    this.descriptor.addElement_ivxn3r$('content', false);
    SequenceElement$$serializer_instance = this;
  }
  Object.defineProperty(SequenceElement$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_igwkk6$_0;
    }
  });
  SequenceElement$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, Identifier$$serializer_getInstance(), value.pid);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, value.content);
    output.endStructure_qatsm0$(this.descriptor);
  };
  SequenceElement$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, Identifier$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, Identifier$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return SequenceElement_init(bitMask0, local0, local1, null);
  };
  SequenceElement$$serializer.prototype.childSerializers = function () {
    return [Identifier$$serializer_getInstance(), internal.StringSerializer];
  };
  SequenceElement$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var SequenceElement$$serializer_instance = null;
  function SequenceElement$$serializer_getInstance() {
    if (SequenceElement$$serializer_instance === null) {
      new SequenceElement$$serializer();
    }return SequenceElement$$serializer_instance;
  }
  function SequenceElement_init(seen1, pid, content, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(SequenceElement.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('pid');
    else
      $this.pid = pid;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('content');
    else
      $this.content = content;
    return $this;
  }
  SequenceElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SequenceElement',
    interfaces: [Comparable]
  };
  SequenceElement.prototype.component1 = function () {
    return this.pid;
  };
  SequenceElement.prototype.component2 = function () {
    return this.content;
  };
  SequenceElement.prototype.copy_vaifv$ = function (pid, content) {
    return new SequenceElement(pid === void 0 ? this.pid : pid, content === void 0 ? this.content : content);
  };
  SequenceElement.prototype.toString = function () {
    return 'SequenceElement(pid=' + Kotlin.toString(this.pid) + (', content=' + Kotlin.toString(this.content)) + ')';
  };
  SequenceElement.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pid) | 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    return result;
  };
  SequenceElement.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.pid, other.pid) && Kotlin.equals(this.content, other.content)))));
  };
  function SequenceOperation() {
    SequenceOperation$Companion_getInstance();
  }
  function SequenceOperation$Companion() {
    SequenceOperation$Companion_instance = this;
  }
  SequenceOperation$Companion.prototype.serializer = function () {
    return new SealedClassSerializer('raid.neuroide.reproto.crdt.seq.SequenceOperation', getKClass(SequenceOperation), [getKClass(SequenceOperationInsert), getKClass(SequenceOperationDelete), getKClass(SequenceOperationMove)], [SequenceOperationInsert$$serializer_getInstance(), SequenceOperationDelete$$serializer_getInstance(), SequenceOperationMove$$serializer_getInstance()]);
  };
  SequenceOperation$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SequenceOperation$Companion_instance = null;
  function SequenceOperation$Companion_getInstance() {
    if (SequenceOperation$Companion_instance === null) {
      new SequenceOperation$Companion();
    }return SequenceOperation$Companion_instance;
  }
  function SequenceOperation_init(seen1, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(SequenceOperation.prototype);
    return $this;
  }
  SequenceOperation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SequenceOperation',
    interfaces: [Operation]
  };
  function SequenceOperationInsert(pid, content) {
    SequenceOperationInsert$Companion_getInstance();
    SequenceOperation.call(this);
    this.pid = pid;
    this.content = content;
  }
  function SequenceOperationInsert$Companion() {
    SequenceOperationInsert$Companion_instance = this;
  }
  SequenceOperationInsert$Companion.prototype.serializer = function () {
    return SequenceOperationInsert$$serializer_getInstance();
  };
  SequenceOperationInsert$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SequenceOperationInsert$Companion_instance = null;
  function SequenceOperationInsert$Companion_getInstance() {
    if (SequenceOperationInsert$Companion_instance === null) {
      new SequenceOperationInsert$Companion();
    }return SequenceOperationInsert$Companion_instance;
  }
  function SequenceOperationInsert$$serializer() {
    this.descriptor_dyu0be$_0 = new SerialClassDescImpl('raid.neuroide.reproto.crdt.seq.SequenceOperationInsert', this, 2);
    this.descriptor.addElement_ivxn3r$('pid', false);
    this.descriptor.addElement_ivxn3r$('content', false);
    SequenceOperationInsert$$serializer_instance = this;
  }
  Object.defineProperty(SequenceOperationInsert$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_dyu0be$_0;
    }
  });
  SequenceOperationInsert$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, Identifier$$serializer_getInstance(), value.pid);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, value.content);
    output.endStructure_qatsm0$(this.descriptor);
  };
  SequenceOperationInsert$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, Identifier$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, Identifier$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return SequenceOperationInsert_init(bitMask0, local0, local1, null);
  };
  SequenceOperationInsert$$serializer.prototype.childSerializers = function () {
    return [Identifier$$serializer_getInstance(), internal.StringSerializer];
  };
  SequenceOperationInsert$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var SequenceOperationInsert$$serializer_instance = null;
  function SequenceOperationInsert$$serializer_getInstance() {
    if (SequenceOperationInsert$$serializer_instance === null) {
      new SequenceOperationInsert$$serializer();
    }return SequenceOperationInsert$$serializer_instance;
  }
  function SequenceOperationInsert_init(seen1, pid, content, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(SequenceOperationInsert.prototype);
    $this = SequenceOperation_init(seen1, $this);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('pid');
    else
      $this.pid = pid;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('content');
    else
      $this.content = content;
    return $this;
  }
  SequenceOperationInsert.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SequenceOperationInsert',
    interfaces: [SequenceOperation]
  };
  SequenceOperationInsert.prototype.component1 = function () {
    return this.pid;
  };
  SequenceOperationInsert.prototype.component2 = function () {
    return this.content;
  };
  SequenceOperationInsert.prototype.copy_vaifv$ = function (pid, content) {
    return new SequenceOperationInsert(pid === void 0 ? this.pid : pid, content === void 0 ? this.content : content);
  };
  SequenceOperationInsert.prototype.toString = function () {
    return 'SequenceOperationInsert(pid=' + Kotlin.toString(this.pid) + (', content=' + Kotlin.toString(this.content)) + ')';
  };
  SequenceOperationInsert.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pid) | 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    return result;
  };
  SequenceOperationInsert.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.pid, other.pid) && Kotlin.equals(this.content, other.content)))));
  };
  function SequenceOperationDelete(pid) {
    SequenceOperationDelete$Companion_getInstance();
    SequenceOperation.call(this);
    this.pid = pid;
  }
  function SequenceOperationDelete$Companion() {
    SequenceOperationDelete$Companion_instance = this;
  }
  SequenceOperationDelete$Companion.prototype.serializer = function () {
    return SequenceOperationDelete$$serializer_getInstance();
  };
  SequenceOperationDelete$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SequenceOperationDelete$Companion_instance = null;
  function SequenceOperationDelete$Companion_getInstance() {
    if (SequenceOperationDelete$Companion_instance === null) {
      new SequenceOperationDelete$Companion();
    }return SequenceOperationDelete$Companion_instance;
  }
  function SequenceOperationDelete$$serializer() {
    this.descriptor_thwt1o$_0 = new SerialClassDescImpl('raid.neuroide.reproto.crdt.seq.SequenceOperationDelete', this, 1);
    this.descriptor.addElement_ivxn3r$('pid', false);
    SequenceOperationDelete$$serializer_instance = this;
  }
  Object.defineProperty(SequenceOperationDelete$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_thwt1o$_0;
    }
  });
  SequenceOperationDelete$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, Identifier$$serializer_getInstance(), value.pid);
    output.endStructure_qatsm0$(this.descriptor);
  };
  SequenceOperationDelete$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, Identifier$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, Identifier$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return SequenceOperationDelete_init(bitMask0, local0, null);
  };
  SequenceOperationDelete$$serializer.prototype.childSerializers = function () {
    return [Identifier$$serializer_getInstance()];
  };
  SequenceOperationDelete$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var SequenceOperationDelete$$serializer_instance = null;
  function SequenceOperationDelete$$serializer_getInstance() {
    if (SequenceOperationDelete$$serializer_instance === null) {
      new SequenceOperationDelete$$serializer();
    }return SequenceOperationDelete$$serializer_instance;
  }
  function SequenceOperationDelete_init(seen1, pid, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(SequenceOperationDelete.prototype);
    $this = SequenceOperation_init(seen1, $this);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('pid');
    else
      $this.pid = pid;
    return $this;
  }
  SequenceOperationDelete.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SequenceOperationDelete',
    interfaces: [SequenceOperation]
  };
  SequenceOperationDelete.prototype.component1 = function () {
    return this.pid;
  };
  SequenceOperationDelete.prototype.copy_bft57x$ = function (pid) {
    return new SequenceOperationDelete(pid === void 0 ? this.pid : pid);
  };
  SequenceOperationDelete.prototype.toString = function () {
    return 'SequenceOperationDelete(pid=' + Kotlin.toString(this.pid) + ')';
  };
  SequenceOperationDelete.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pid) | 0;
    return result;
  };
  SequenceOperationDelete.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.pid, other.pid))));
  };
  function SequenceOperationMove(pidFrom, pidTo) {
    SequenceOperationMove$Companion_getInstance();
    SequenceOperation.call(this);
    this.pidFrom = pidFrom;
    this.pidTo = pidTo;
  }
  function SequenceOperationMove$Companion() {
    SequenceOperationMove$Companion_instance = this;
  }
  SequenceOperationMove$Companion.prototype.serializer = function () {
    return SequenceOperationMove$$serializer_getInstance();
  };
  SequenceOperationMove$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SequenceOperationMove$Companion_instance = null;
  function SequenceOperationMove$Companion_getInstance() {
    if (SequenceOperationMove$Companion_instance === null) {
      new SequenceOperationMove$Companion();
    }return SequenceOperationMove$Companion_instance;
  }
  function SequenceOperationMove$$serializer() {
    this.descriptor_hzyhn2$_0 = new SerialClassDescImpl('raid.neuroide.reproto.crdt.seq.SequenceOperationMove', this, 2);
    this.descriptor.addElement_ivxn3r$('pidFrom', false);
    this.descriptor.addElement_ivxn3r$('pidTo', false);
    SequenceOperationMove$$serializer_instance = this;
  }
  Object.defineProperty(SequenceOperationMove$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_hzyhn2$_0;
    }
  });
  SequenceOperationMove$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, Identifier$$serializer_getInstance(), value.pidFrom);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, Identifier$$serializer_getInstance(), value.pidTo);
    output.endStructure_qatsm0$(this.descriptor);
  };
  SequenceOperationMove$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, Identifier$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, Identifier$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, Identifier$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, Identifier$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return SequenceOperationMove_init(bitMask0, local0, local1, null);
  };
  SequenceOperationMove$$serializer.prototype.childSerializers = function () {
    return [Identifier$$serializer_getInstance(), Identifier$$serializer_getInstance()];
  };
  SequenceOperationMove$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var SequenceOperationMove$$serializer_instance = null;
  function SequenceOperationMove$$serializer_getInstance() {
    if (SequenceOperationMove$$serializer_instance === null) {
      new SequenceOperationMove$$serializer();
    }return SequenceOperationMove$$serializer_instance;
  }
  function SequenceOperationMove_init(seen1, pidFrom, pidTo, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(SequenceOperationMove.prototype);
    $this = SequenceOperation_init(seen1, $this);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('pidFrom');
    else
      $this.pidFrom = pidFrom;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('pidTo');
    else
      $this.pidTo = pidTo;
    return $this;
  }
  SequenceOperationMove.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SequenceOperationMove',
    interfaces: [SequenceOperation]
  };
  SequenceOperationMove.prototype.component1 = function () {
    return this.pidFrom;
  };
  SequenceOperationMove.prototype.component2 = function () {
    return this.pidTo;
  };
  SequenceOperationMove.prototype.copy_pa9v7e$ = function (pidFrom, pidTo) {
    return new SequenceOperationMove(pidFrom === void 0 ? this.pidFrom : pidFrom, pidTo === void 0 ? this.pidTo : pidTo);
  };
  SequenceOperationMove.prototype.toString = function () {
    return 'SequenceOperationMove(pidFrom=' + Kotlin.toString(this.pidFrom) + (', pidTo=' + Kotlin.toString(this.pidTo)) + ')';
  };
  SequenceOperationMove.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pidFrom) | 0;
    result = result * 31 + Kotlin.hashCode(this.pidTo) | 0;
    return result;
  };
  SequenceOperationMove.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.pidFrom, other.pidFrom) && Kotlin.equals(this.pidTo, other.pidTo)))));
  };
  function DefaultContext(site) {
    this.idCounter_0 = 0;
    this.siteId_6lictw$_0 = new LocalSiteId(site);
  }
  Object.defineProperty(DefaultContext.prototype, 'siteId', {
    get: function () {
      return this.siteId_6lictw$_0;
    }
  });
  DefaultContext.prototype.issueId = function () {
    this.idCounter_0 = this.idCounter_0 + 1 | 0;
    return this.siteId.id + '::' + this.idCounter_0;
  };
  DefaultContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultContext',
    interfaces: [NodeContext]
  };
  function IdChain(chain) {
    IdChain$Companion_getInstance();
    this.chain = chain;
    this.index_0 = 0;
  }
  IdChain.prototype.shift = function () {
    var tmp$;
    return this.chain.get_za3lpa$((tmp$ = this.index_0, this.index_0 = tmp$ + 1 | 0, tmp$));
  };
  Object.defineProperty(IdChain.prototype, 'hasNext', {
    get: function () {
      return this.index_0 < this.chain.size;
    }
  });
  function IdChain$Companion() {
    IdChain$Companion_instance = this;
  }
  IdChain$Companion.prototype.serializer = function () {
    return IdChain$$serializer_getInstance();
  };
  IdChain$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IdChain$Companion_instance = null;
  function IdChain$Companion_getInstance() {
    if (IdChain$Companion_instance === null) {
      new IdChain$Companion();
    }return IdChain$Companion_instance;
  }
  function IdChain$$serializer() {
    this.descriptor_cndas7$_0 = new SerialClassDescImpl('raid.neuroide.reproto.IdChain', this, 1);
    this.descriptor.addElement_ivxn3r$('chain', false);
    IdChain$$serializer_instance = this;
  }
  Object.defineProperty(IdChain$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_cndas7$_0;
    }
  });
  IdChain$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new ArrayListSerializer(internal.StringSerializer), value.chain);
    output.endStructure_qatsm0$(this.descriptor);
  };
  IdChain$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new ArrayListSerializer(internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new ArrayListSerializer(internal.StringSerializer), local0);
          bitMask0 |= 1;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return IdChain_init(bitMask0, local0, null);
  };
  IdChain$$serializer.prototype.childSerializers = function () {
    return [new ArrayListSerializer(internal.StringSerializer)];
  };
  IdChain$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var IdChain$$serializer_instance = null;
  function IdChain$$serializer_getInstance() {
    if (IdChain$$serializer_instance === null) {
      new IdChain$$serializer();
    }return IdChain$$serializer_instance;
  }
  function IdChain_init(seen1, chain, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(IdChain.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('chain');
    else
      $this.chain = chain;
    $this.index_0 = 0;
    return $this;
  }
  IdChain.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IdChain',
    interfaces: []
  };
  function IdChain_init_0(ids, $this) {
    $this = $this || Object.create(IdChain.prototype);
    IdChain.call($this, toList(ids));
    return $this;
  }
  function Layer(context) {
    Layer$Companion_getInstance();
    this.context_0 = context;
    this.parameters_0 = LinkedHashMap_init();
    this.listeners_0 = null;
    this.myUpstream_0 = null;
  }
  Layer.prototype.get = function (paramName) {
    var $receiver = this.parameters_0;
    var tmp$;
    var value = $receiver.get_11rb$(paramName);
    if (value == null) {
      var answer = this.createRegister_0(paramName);
      $receiver.put_xwzc9p$(paramName, answer);
      tmp$ = answer;
    } else {
      tmp$ = value;
    }
    var rg = tmp$;
    return new RegisterWrapper(rg);
  };
  function Layer$setListeners$lambda(closure$name, this$Layer) {
    return function (it) {
      this$Layer.parameterChanged_0(closure$name);
      return Unit;
    };
  }
  Layer.prototype.setListeners_20rwm3$ = function (l) {
    var tmp$;
    if (this.listeners_0 == null) {
      tmp$ = this.parameters_0.entries.iterator();
      while (tmp$.hasNext()) {
        var tmp$_0 = tmp$.next();
        var name = tmp$_0.key;
        var register = tmp$_0.value;
        register.setListener_rslci1$(Layer$setListeners$lambda(name, this));
      }
    }this.listeners_0 = l;
  };
  Layer.prototype.parameterChanged_0 = function (name) {
    var tmp$;
    (tmp$ = this.listeners_0) != null ? (tmp$.parameterChanged(this, name, this.get(name)), Unit) : null;
  };
  Layer.prototype.setUpstream_5q3qwm$ = function (upstream) {
    var tmp$;
    this.myUpstream_0 = upstream;
    tmp$ = this.parameters_0.values.iterator();
    while (tmp$.hasNext()) {
      var param = tmp$.next();
      param.setUpstream_uy2x1y$(upstream);
    }
  };
  Layer.prototype.processUpdate_rsal8a$ = function (update) {
    if (update.id.hasNext) {
      this.applyUpdate_0(update.id.shift(), update.payload.operation);
    } else {
      this.applyUpdate_1(update.payload);
    }
  };
  function Layer$createRegister$lambda(closure$paramName, this$Layer) {
    return function (it) {
      this$Layer.parameterChanged_0(closure$paramName);
      return Unit;
    };
  }
  Layer.prototype.createRegister_0 = function (paramName) {
    var tmp$;
    var rg = LWWRegister_init_0('', this.context_0.siteId);
    if (this.listeners_0 != null)
      rg.setListener_rslci1$(Layer$createRegister$lambda(paramName, this));
    if ((tmp$ = this.myUpstream_0) != null) {
      rg.setUpstream_uy2x1y$(tmp$.child_61zpoe$(paramName));
    }return rg;
  };
  Layer.prototype.applyUpdate_0 = function (paramName, operation) {
    var $receiver = this.parameters_0;
    var tmp$;
    var value = $receiver.get_11rb$(paramName);
    if (value == null) {
      var answer = this.createRegister_0(paramName);
      $receiver.put_xwzc9p$(paramName, answer);
      tmp$ = answer;
    } else {
      tmp$ = value;
    }
    tmp$.deliver_8lzwlo$(operation);
  };
  Layer.prototype.applyUpdate_1 = function (update) {
    throw UnsupportedOperationException_init();
  };
  function Layer$Companion() {
    Layer$Companion_instance = this;
  }
  Layer$Companion.prototype.serializer = function () {
    return Layer$$serializer_getInstance();
  };
  Layer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Layer$Companion_instance = null;
  function Layer$Companion_getInstance() {
    if (Layer$Companion_instance === null) {
      new Layer$Companion();
    }return Layer$Companion_instance;
  }
  function Layer$$serializer() {
    this.descriptor_x2ata$_0 = new SerialClassDescImpl('raid.neuroide.reproto.Layer', this, 2);
    this.descriptor.addElement_ivxn3r$('context', false);
    this.descriptor.addElement_ivxn3r$('parameters', true);
    Layer$$serializer_instance = this;
  }
  Object.defineProperty(Layer$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_x2ata$_0;
    }
  });
  Layer$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new ContextSerializer(getKClass(NodeContextWrapper)), value.context_0);
    if (!equals(value.parameters_0, LinkedHashMap_init()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeSerializableElement_blecud$(this.descriptor, 1, new LinkedHashMapSerializer(internal.StringSerializer, LWWRegister$$serializer_getInstance()), value.parameters_0);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Layer$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new ContextSerializer(getKClass(NodeContextWrapper))) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new ContextSerializer(getKClass(NodeContextWrapper)), local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, new LinkedHashMapSerializer(internal.StringSerializer, LWWRegister$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, new LinkedHashMapSerializer(internal.StringSerializer, LWWRegister$$serializer_getInstance()), local1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Layer_init(bitMask0, local0, local1, null);
  };
  Layer$$serializer.prototype.childSerializers = function () {
    return [new ContextSerializer(getKClass(NodeContextWrapper)), new LinkedHashMapSerializer(internal.StringSerializer, LWWRegister$$serializer_getInstance())];
  };
  Layer$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Layer$$serializer_instance = null;
  function Layer$$serializer_getInstance() {
    if (Layer$$serializer_instance === null) {
      new Layer$$serializer();
    }return Layer$$serializer_instance;
  }
  function Layer_init(seen1, context, parameters, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Layer.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('context');
    else
      $this.context_0 = context;
    if ((seen1 & 2) === 0) {
      $this.parameters_0 = LinkedHashMap_init();
    } else
      $this.parameters_0 = parameters;
    $this.listeners_0 = null;
    $this.myUpstream_0 = null;
    return $this;
  }
  Layer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Layer',
    interfaces: []
  };
  function LogUpstream() {
  }
  LogUpstream.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LogUpstream',
    interfaces: []
  };
  function NodeContext() {
  }
  NodeContext.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'NodeContext',
    interfaces: []
  };
  function NodeContextWrapper(impl) {
    NodeContextWrapper$Companion_getInstance();
    this.$delegate_bphh46$_0 = impl;
  }
  function NodeContextWrapper$Companion() {
    NodeContextWrapper$Companion_instance = this;
  }
  NodeContextWrapper$Companion.prototype.serializer = function () {
    return new ContextSerializer(getKClass(NodeContextWrapper));
  };
  NodeContextWrapper$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var NodeContextWrapper$Companion_instance = null;
  function NodeContextWrapper$Companion_getInstance() {
    if (NodeContextWrapper$Companion_instance === null) {
      new NodeContextWrapper$Companion();
    }return NodeContextWrapper$Companion_instance;
  }
  Object.defineProperty(NodeContextWrapper.prototype, 'siteId', {
    get: function () {
      return this.$delegate_bphh46$_0.siteId;
    }
  });
  NodeContextWrapper.prototype.issueId = function () {
    return this.$delegate_bphh46$_0.issueId();
  };
  NodeContextWrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NodeContextWrapper',
    interfaces: [NodeContext]
  };
  function wrapped($receiver) {
    return Kotlin.isType($receiver, NodeContextWrapper) ? $receiver : new NodeContextWrapper($receiver);
  }
  function Prototype(context) {
    Prototype$Companion_getInstance();
    this.context_0 = context;
    this.layersMap_0 = LinkedHashMap_init();
    this.log_8be2vx$ = new ReplicatedLog(this.context_0);
    this.listeners_0 = null;
    this.myUpstream_0 = null;
    var tmp$;
    this.layerSequence_0 = new Sequence((tmp$ = this != null ? this.context_0 : null) != null ? tmp$.siteId : null, LogootStrategy_getInstance());
  }
  Object.defineProperty(Prototype.prototype, 'layers', {
    get: function () {
      var $receiver = this.layerSequence_0.content;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(this.getOrCreateLayer_0(item));
      }
      return copyToArray(destination);
    }
  });
  Prototype.prototype.addLayer = function (position) {
    var layerId = this.context_0.issueId();
    var layer = this.createLayer_0(layerId);
    this.layerSequence_0.insert_19mbxw$(position, layerId);
    this.layersMap_0.put_xwzc9p$(layerId, layer);
    return layer;
  };
  Prototype.prototype.moveLayer = function (from, to) {
    this.layerSequence_0.move_vux9f0$(from, to);
  };
  Prototype.prototype.removeLayer = function (position) {
    this.layerSequence_0.delete_za3lpa$(position);
  };
  Prototype.prototype.setListeners = function (l) {
    var tmp$, tmp$_0;
    if (this.listeners_0 == null) {
      this.layerSequence_0.setListener_rslci1$(getCallableRef('layerSequenceChanged', function ($receiver, change) {
        return $receiver.layerSequenceChanged_0(change), Unit;
      }.bind(null, this)));
    }this.listeners_0 = l;
    tmp$ = this.layers;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var layer = tmp$[tmp$_0];
      layer.setListeners_20rwm3$(l);
    }
  };
  Prototype.prototype.layerSequenceChanged_0 = function (change) {
    var tmp$, tmp$_0, tmp$_1;
    if (Kotlin.isType(change, Change$Insert))
      (tmp$ = this.listeners_0) != null ? (tmp$.layerAdded(change.position, this.getOrCreateLayer_0(change.value)), Unit) : null;
    else if (Kotlin.isType(change, Change$Delete))
      (tmp$_0 = this.listeners_0) != null ? (tmp$_0.layerRemoved(change.position, this.getOrCreateLayer_0(change.value)), Unit) : null;
    else if (Kotlin.isType(change, Change$Move))
      (tmp$_1 = this.listeners_0) != null ? (tmp$_1.layerMoved(change.from, change.to, this.getOrCreateLayer_0(change.value)), Unit) : null;
    else
      Kotlin.noWhenBranchMatched();
  };
  Prototype.prototype.setUpstream_5q3qwm$ = function (upstream) {
    var tmp$;
    this.myUpstream_0 = upstream;
    this.layerSequence_0.setUpstream_uy2x1y$(upstream);
    tmp$ = this.layersMap_0.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var layerId = tmp$_0.key;
      var layer = tmp$_0.value;
      layer.setUpstream_5q3qwm$(upstream.child_61zpoe$(layerId));
    }
  };
  Prototype.prototype.processUpdate_rsal8a$ = function (update) {
    if (!this.log_8be2vx$.tryCommit_ww7k4j$(update))
      return;
    if (update.id.hasNext) {
      var layerId = update.id.shift();
      this.getOrCreateLayer_0(layerId).processUpdate_rsal8a$(update);
    } else {
      this.applyUpdate_0(update.payload);
    }
  };
  Prototype.prototype.getOrCreateLayer_0 = function (layerId) {
    var $receiver = this.layersMap_0;
    var tmp$;
    var value = $receiver.get_11rb$(layerId);
    if (value == null) {
      var answer = this.createLayer_0(layerId);
      $receiver.put_xwzc9p$(layerId, answer);
      tmp$ = answer;
    } else {
      tmp$ = value;
    }
    return tmp$;
  };
  Prototype.prototype.createLayer_0 = function (id) {
    var tmp$, tmp$_0;
    var layer = new Layer(this.context_0);
    if ((tmp$ = this.listeners_0) != null) {
      layer.setListeners_20rwm3$(tmp$);
    }if ((tmp$_0 = this.myUpstream_0) != null) {
      layer.setUpstream_5q3qwm$(tmp$_0.child_61zpoe$(id));
    }return layer;
  };
  Prototype.prototype.applyUpdate_0 = function (update) {
    this.layerSequence_0.deliver_8lzwlo$(update.operation);
  };
  function Prototype$Companion() {
    Prototype$Companion_instance = this;
  }
  Prototype$Companion.prototype.serializer = function () {
    return Prototype$$serializer_getInstance();
  };
  Prototype$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Prototype$Companion_instance = null;
  function Prototype$Companion_getInstance() {
    if (Prototype$Companion_instance === null) {
      new Prototype$Companion();
    }return Prototype$Companion_instance;
  }
  function Prototype$$serializer() {
    this.descriptor_o2lnql$_0 = new SerialClassDescImpl('raid.neuroide.reproto.Prototype', this, 4);
    this.descriptor.addElement_ivxn3r$('context', false);
    this.descriptor.addElement_ivxn3r$('layersMap', true);
    this.descriptor.addElement_ivxn3r$('log', true);
    this.descriptor.addElement_ivxn3r$('layerSequence', true);
    Prototype$$serializer_instance = this;
  }
  Object.defineProperty(Prototype$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_o2lnql$_0;
    }
  });
  Prototype$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_0 = (tmp$ = this != null ? this.context_0 : null) != null ? tmp$.siteId : null;
    tmp$_1 = LogootStrategy_getInstance();
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new ContextSerializer(getKClass(NodeContextWrapper)), value.context_0);
    if (!equals(value.layersMap_0, LinkedHashMap_init()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeSerializableElement_blecud$(this.descriptor, 1, new LinkedHashMapSerializer(internal.StringSerializer, Layer$$serializer_getInstance()), value.layersMap_0);
    if (!equals(value.log_8be2vx$, new ReplicatedLog(this.context_0)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeSerializableElement_blecud$(this.descriptor, 2, ReplicatedLog$$serializer_getInstance(), value.log_8be2vx$);
    if (!equals(value.layerSequence_0, new Sequence(tmp$_0, tmp$_1)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeSerializableElement_blecud$(this.descriptor, 3, Sequence$$serializer_getInstance(), value.layerSequence_0);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Prototype$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new ContextSerializer(getKClass(NodeContextWrapper))) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new ContextSerializer(getKClass(NodeContextWrapper)), local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, new LinkedHashMapSerializer(internal.StringSerializer, Layer$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, new LinkedHashMapSerializer(internal.StringSerializer, Layer$$serializer_getInstance()), local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, ReplicatedLog$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, ReplicatedLog$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 3, Sequence$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 3, Sequence$$serializer_getInstance(), local3);
          bitMask0 |= 8;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Prototype_init(bitMask0, local0, local1, local2, local3, null);
  };
  Prototype$$serializer.prototype.childSerializers = function () {
    return [new ContextSerializer(getKClass(NodeContextWrapper)), new LinkedHashMapSerializer(internal.StringSerializer, Layer$$serializer_getInstance()), ReplicatedLog$$serializer_getInstance(), Sequence$$serializer_getInstance()];
  };
  Prototype$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Prototype$$serializer_instance = null;
  function Prototype$$serializer_getInstance() {
    if (Prototype$$serializer_instance === null) {
      new Prototype$$serializer();
    }return Prototype$$serializer_instance;
  }
  function Prototype_init(seen1, context, layersMap, log, layerSequence, serializationConstructorMarker) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_0 = (tmp$ = $this != null ? $this.context_0 : null) != null ? tmp$.siteId : null;
    tmp$_1 = LogootStrategy_getInstance();
    var $this = serializationConstructorMarker || Object.create(Prototype.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('context');
    else
      $this.context_0 = context;
    if ((seen1 & 2) === 0) {
      $this.layersMap_0 = LinkedHashMap_init();
    } else
      $this.layersMap_0 = layersMap;
    if ((seen1 & 4) === 0)
      $this.log_8be2vx$ = new ReplicatedLog($this.context_0);
    else
      $this.log_8be2vx$ = log;
    if ((seen1 & 8) === 0)
      $this.layerSequence_0 = new Sequence(tmp$_0, tmp$_1);
    else
      $this.layerSequence_0 = layerSequence;
    $this.listeners_0 = null;
    $this.myUpstream_0 = null;
    return $this;
  }
  Prototype.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Prototype',
    interfaces: []
  };
  function PrototypeListener() {
  }
  PrototypeListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PrototypeListener',
    interfaces: []
  };
  function ReplicatedLog(context) {
    ReplicatedLog$Companion_getInstance();
    this.context_0 = context;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.clock_0 = new VectorClock((tmp$_0 = (tmp$ = this != null ? this.context_0 : null) != null ? tmp$.siteId : null) != null ? tmp$_0 : new LocalSiteId(''));
    this.site_0 = (tmp$_2 = (tmp$_1 = this != null ? this.context_0 : null) != null ? tmp$_1.siteId : null) != null ? tmp$_2.id : null;
    this.myUpstream_0 = null;
  }
  Object.defineProperty(ReplicatedLog.prototype, 'currentTimestamp', {
    get: function () {
      return this.clock_0.value;
    }
  });
  ReplicatedLog.prototype.setUpstream_iz29jp$ = function (upstream) {
    this.myUpstream_0 = upstream;
  };
  ReplicatedLog.prototype.issueLocalUpdate_gzoil3$ = function (id, payload) {
    var tmp$;
    var update = new Update(id, this.issueLocalTimestamp_0(), payload);
    (tmp$ = this.myUpstream_0) != null ? (tmp$.save_ww7k4j$(update), Unit) : null;
    return update;
  };
  ReplicatedLog.prototype.tryCommit_ww7k4j$ = function (update) {
    var tmp$;
    var tmp$_0 = update.index;
    var longIndex = tmp$_0.component1()
    , origin = tmp$_0.component2();
    var index = longIndex.toInt();
    var currentIndex = this.clock_0.value.get_61zpoe$(origin);
    if (index <= currentIndex) {
      return false;
    }if (index > (currentIndex + 1 | 0)) {
      throw IllegalStateException_init('Messages were lost');
    }this.clock_0.update_bd7lk$(new VectorTimestamp(mapOf(to(origin, index))));
    (tmp$ = this.myUpstream_0) != null ? (tmp$.save_ww7k4j$(update), Unit) : null;
    return true;
  };
  ReplicatedLog.prototype.getUpdates_z0m90q$ = function (sinceRevision, maxCount) {
    if (maxCount === void 0)
      maxCount = 2147483647;
    var tmp$;
    return (tmp$ = this.myUpstream_0) != null ? tmp$.restore_z0m90q$(sinceRevision, maxCount) : null;
  };
  ReplicatedLog.prototype.issueLocalTimestamp_0 = function () {
    var localIndex = this.clock_0.next().get_61zpoe$(this.site_0);
    return new LamportTimestamp(Kotlin.Long.fromInt(localIndex), this.site_0);
  };
  function ReplicatedLog$Companion() {
    ReplicatedLog$Companion_instance = this;
  }
  ReplicatedLog$Companion.prototype.serializer = function () {
    return ReplicatedLog$$serializer_getInstance();
  };
  ReplicatedLog$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ReplicatedLog$Companion_instance = null;
  function ReplicatedLog$Companion_getInstance() {
    if (ReplicatedLog$Companion_instance === null) {
      new ReplicatedLog$Companion();
    }return ReplicatedLog$Companion_instance;
  }
  function ReplicatedLog$$serializer() {
    this.descriptor_i45lm$_0 = new SerialClassDescImpl('raid.neuroide.reproto.ReplicatedLog', this, 2);
    this.descriptor.addElement_ivxn3r$('context', false);
    this.descriptor.addElement_ivxn3r$('clock', true);
    ReplicatedLog$$serializer_instance = this;
  }
  Object.defineProperty(ReplicatedLog$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_i45lm$_0;
    }
  });
  ReplicatedLog$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = (tmp$_0 = (tmp$ = this != null ? this.context_0 : null) != null ? tmp$.siteId : null) != null ? tmp$_0 : new LocalSiteId('');
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new ContextSerializer(getKClass(NodeContextWrapper)), value.context_0);
    if (!equals(value.clock_0, new VectorClock(tmp$_1)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeSerializableElement_blecud$(this.descriptor, 1, VectorClock$$serializer_getInstance(), value.clock_0);
    output.endStructure_qatsm0$(this.descriptor);
  };
  ReplicatedLog$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new ContextSerializer(getKClass(NodeContextWrapper))) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new ContextSerializer(getKClass(NodeContextWrapper)), local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, VectorClock$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, VectorClock$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return ReplicatedLog_init(bitMask0, local0, local1, null);
  };
  ReplicatedLog$$serializer.prototype.childSerializers = function () {
    return [new ContextSerializer(getKClass(NodeContextWrapper)), VectorClock$$serializer_getInstance()];
  };
  ReplicatedLog$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var ReplicatedLog$$serializer_instance = null;
  function ReplicatedLog$$serializer_getInstance() {
    if (ReplicatedLog$$serializer_instance === null) {
      new ReplicatedLog$$serializer();
    }return ReplicatedLog$$serializer_instance;
  }
  function ReplicatedLog_init(seen1, context, clock, serializationConstructorMarker) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$_1 = (tmp$_0 = (tmp$ = $this != null ? $this.context_0 : null) != null ? tmp$.siteId : null) != null ? tmp$_0 : new LocalSiteId('');
    var $this = serializationConstructorMarker || Object.create(ReplicatedLog.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('context');
    else
      $this.context_0 = context;
    if ((seen1 & 2) === 0)
      $this.clock_0 = new VectorClock(tmp$_1);
    else
      $this.clock_0 = clock;
    $this.site_0 = (tmp$_3 = (tmp$_2 = $this != null ? $this.context_0 : null) != null ? tmp$_2.siteId : null) != null ? tmp$_3.id : null;
    $this.myUpstream_0 = null;
    return $this;
  }
  ReplicatedLog.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReplicatedLog',
    interfaces: []
  };
  function getSerialModuleForContext$lambda(closure$context) {
    return function ($receiver) {
      $receiver.contextual_cfhkba$(getKClass(NodeContextWrapper), new ContextualInjectorSerializer(wrapped(closure$context)));
      return Unit;
    };
  }
  function getSerialModuleForContext(context) {
    return plus_2(getCrdtSerializers(context.siteId), SerializersModule(getSerialModuleForContext$lambda(context)));
  }
  function SerializationManager(context) {
    this.module_0 = getSerialModuleForContext(context);
  }
  SerializationManager.prototype.serialize_1xcr1u$ = function (prototype) {
    return this.getJson_0().stringify_tf03ej$(Prototype$Companion_getInstance().serializer(), prototype);
  };
  SerializationManager.prototype.deserializePrototype_61zpoe$ = function (data) {
    return this.getJson_0().parse_awif5v$(Prototype$Companion_getInstance().serializer(), data);
  };
  SerializationManager.prototype.serialize_ww7k4j$ = function (update) {
    return this.getJson_0().stringify_tf03ej$(Update$Companion_getInstance().serializer(), update);
  };
  SerializationManager.prototype.deserializeUpdate_61zpoe$ = function (data) {
    return this.getJson_0().parse_awif5v$(Update$Companion_getInstance().serializer(), data);
  };
  SerializationManager.prototype.serialize_bd7lk$ = function (vectorTimestamp) {
    return this.getJson_0().stringify_tf03ej$(VectorTimestamp$Companion_getInstance().serializer(), vectorTimestamp);
  };
  SerializationManager.prototype.getJson_0 = function () {
    return new Json(JsonConfiguration.Companion.Stable.copy_bjakrj$(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, '_type'), this.module_0);
  };
  SerializationManager.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializationManager',
    interfaces: []
  };
  function Update(id, index, payload) {
    Update$Companion_getInstance();
    this.id = id;
    this.index = index;
    this.payload = payload;
  }
  function Update$Companion() {
    Update$Companion_instance = this;
  }
  Update$Companion.prototype.serializer = function () {
    return Update$$serializer_getInstance();
  };
  Update$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Update$Companion_instance = null;
  function Update$Companion_getInstance() {
    if (Update$Companion_instance === null) {
      new Update$Companion();
    }return Update$Companion_instance;
  }
  function Update$$serializer() {
    this.descriptor_hkknoi$_0 = new SerialClassDescImpl('raid.neuroide.reproto.Update', this, 3);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('index', false);
    this.descriptor.addElement_ivxn3r$('payload', false);
    Update$$serializer_instance = this;
  }
  Object.defineProperty(Update$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_hkknoi$_0;
    }
  });
  Update$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, IdChain$$serializer_getInstance(), value.id);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, LamportTimestamp$$serializer_getInstance(), value.index);
    output.encodeSerializableElement_blecud$(this.descriptor, 2, UpdatePayload$$serializer_getInstance(), value.payload);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Update$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, IdChain$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, IdChain$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, LamportTimestamp$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, LamportTimestamp$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, UpdatePayload$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, UpdatePayload$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Update_init(bitMask0, local0, local1, local2, null);
  };
  Update$$serializer.prototype.childSerializers = function () {
    return [IdChain$$serializer_getInstance(), LamportTimestamp$$serializer_getInstance(), UpdatePayload$$serializer_getInstance()];
  };
  Update$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Update$$serializer_instance = null;
  function Update$$serializer_getInstance() {
    if (Update$$serializer_instance === null) {
      new Update$$serializer();
    }return Update$$serializer_instance;
  }
  function Update_init(seen1, id, index, payload, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Update.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('index');
    else
      $this.index = index;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('payload');
    else
      $this.payload = payload;
    return $this;
  }
  Update.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Update',
    interfaces: []
  };
  function UpdatePayload(operation) {
    UpdatePayload$Companion_getInstance();
    this.operation = operation;
  }
  function UpdatePayload$Companion() {
    UpdatePayload$Companion_instance = this;
  }
  UpdatePayload$Companion.prototype.serializer = function () {
    return UpdatePayload$$serializer_getInstance();
  };
  UpdatePayload$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UpdatePayload$Companion_instance = null;
  function UpdatePayload$Companion_getInstance() {
    if (UpdatePayload$Companion_instance === null) {
      new UpdatePayload$Companion();
    }return UpdatePayload$Companion_instance;
  }
  function UpdatePayload$$serializer() {
    this.descriptor_h9sefe$_0 = new SerialClassDescImpl('raid.neuroide.reproto.UpdatePayload', this, 1);
    this.descriptor.addElement_ivxn3r$('operation', false);
    UpdatePayload$$serializer_instance = this;
  }
  Object.defineProperty(UpdatePayload$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_h9sefe$_0;
    }
  });
  UpdatePayload$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new PolymorphicSerializer(getKClass(Operation)), value.operation);
    output.endStructure_qatsm0$(this.descriptor);
  };
  UpdatePayload$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new PolymorphicSerializer(getKClass(Operation))) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new PolymorphicSerializer(getKClass(Operation)), local0);
          bitMask0 |= 1;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return UpdatePayload_init(bitMask0, local0, null);
  };
  UpdatePayload$$serializer.prototype.childSerializers = function () {
    return [new PolymorphicSerializer(getKClass(Operation))];
  };
  UpdatePayload$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var UpdatePayload$$serializer_instance = null;
  function UpdatePayload$$serializer_getInstance() {
    if (UpdatePayload$$serializer_instance === null) {
      new UpdatePayload$$serializer();
    }return UpdatePayload$$serializer_instance;
  }
  function UpdatePayload_init(seen1, operation, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(UpdatePayload.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('operation');
    else
      $this.operation = operation;
    return $this;
  }
  UpdatePayload.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UpdatePayload',
    interfaces: []
  };
  var package$raid = _.raid || (_.raid = {});
  var package$neuroide = package$raid.neuroide || (package$raid.neuroide = {});
  var package$reproto = package$neuroide.reproto || (package$neuroide.reproto = {});
  package$reproto.ChainedUpstream = ChainedUpstream;
  package$reproto.ClientGateway = ClientGateway;
  package$reproto.ClientNode = ClientNode;
  var package$common = package$reproto.common || (package$reproto.common = {});
  package$common.ContextualInjectorSerializer = ContextualInjectorSerializer;
  Object.defineProperty(LamportTimestamp, 'Companion', {
    get: LamportTimestamp$Companion_getInstance
  });
  Object.defineProperty(LamportTimestamp, '$serializer', {
    get: LamportTimestamp$$serializer_getInstance
  });
  var package$crdt = package$reproto.crdt || (package$reproto.crdt = {});
  package$crdt.LamportTimestamp_init_hcfk6w$ = LamportTimestamp_init;
  package$crdt.LamportTimestamp = LamportTimestamp;
  Object.defineProperty(LamportClock, 'Companion', {
    get: LamportClock$Companion_getInstance
  });
  Object.defineProperty(LamportClock, '$serializer', {
    get: LamportClock$$serializer_getInstance
  });
  package$crdt.LamportClock_init_tf4zmi$ = LamportClock_init;
  package$crdt.LamportClock = LamportClock;
  Object.defineProperty(PlainClock, 'Companion', {
    get: PlainClock$Companion_getInstance
  });
  Object.defineProperty(PlainClock, '$serializer', {
    get: PlainClock$$serializer_getInstance
  });
  package$crdt.PlainClock_init_s7yfif$ = PlainClock_init;
  package$crdt.PlainClock = PlainClock;
  Object.defineProperty(VectorTimestamp, 'Companion', {
    get: VectorTimestamp$Companion_getInstance
  });
  Object.defineProperty(VectorTimestamp, '$serializer', {
    get: VectorTimestamp$$serializer_getInstance
  });
  package$crdt.VectorTimestamp_init_z1k85a$ = VectorTimestamp_init;
  package$crdt.VectorTimestamp = VectorTimestamp;
  Object.defineProperty(VectorClock, 'Companion', {
    get: VectorClock$Companion_getInstance
  });
  Object.defineProperty(VectorClock, '$serializer', {
    get: VectorClock$$serializer_getInstance
  });
  package$crdt.VectorClock_init_ay3k50$ = VectorClock_init;
  package$crdt.VectorClock = VectorClock;
  package$crdt.Operation = Operation;
  package$crdt.Upstream = Upstream;
  package$crdt.Crdt = Crdt;
  Object.defineProperty(LocalSiteId, 'Companion', {
    get: LocalSiteId$Companion_getInstance
  });
  package$crdt.LocalSiteId = LocalSiteId;
  package$crdt.getCrdtSerializers_ea7nbi$ = getCrdtSerializers;
  package$crdt.IncomparableException = IncomparableException;
  Object.defineProperty(LWWRegister$LWWRegisterSet, 'Companion', {
    get: LWWRegister$LWWRegisterSet$Companion_getInstance
  });
  Object.defineProperty(LWWRegister$LWWRegisterSet, '$serializer', {
    get: LWWRegister$LWWRegisterSet$$serializer_getInstance
  });
  LWWRegister.LWWRegisterSet_init_gpjxr6$ = LWWRegister$LWWRegister$LWWRegisterSet_init;
  LWWRegister.LWWRegisterSet = LWWRegister$LWWRegisterSet;
  Object.defineProperty(LWWRegister, 'Companion', {
    get: LWWRegister$Companion_getInstance
  });
  Object.defineProperty(LWWRegister, '$serializer', {
    get: LWWRegister$$serializer_getInstance
  });
  package$crdt.LWWRegister_init_m25fst$ = LWWRegister_init;
  package$crdt.LWWRegister_init_nhzuw0$ = LWWRegister_init_0;
  package$crdt.LWWRegister = LWWRegister;
  package$crdt.ObservableCrdt = ObservableCrdt;
  package$crdt.RegisterWrapper = RegisterWrapper;
  var package$seq = package$crdt.seq || (package$crdt.seq = {});
  package$seq.AllocationStrategy = AllocationStrategy;
  Change.Insert = Change$Insert;
  Change.Delete = Change$Delete;
  Change.Move = Change$Move;
  package$seq.Change = Change;
  Object.defineProperty(Doublet, 'Companion', {
    get: Doublet$Companion_getInstance
  });
  Object.defineProperty(Doublet, '$serializer', {
    get: Doublet$$serializer_getInstance
  });
  package$seq.Doublet_init_9hvpzv$ = Doublet_init;
  package$seq.Doublet = Doublet;
  Object.defineProperty(Identifier, 'Companion', {
    get: Identifier$Companion_getInstance
  });
  Object.defineProperty(Identifier, '$serializer', {
    get: Identifier$$serializer_getInstance
  });
  package$seq.Identifier_init_h1f6g6$ = Identifier_init;
  package$seq.Identifier = Identifier;
  Object.defineProperty(package$seq, 'LogootStrategy', {
    get: LogootStrategy_getInstance
  });
  Object.defineProperty(Sequence, 'Companion', {
    get: Sequence$Companion_getInstance
  });
  Object.defineProperty(Sequence, '$serializer', {
    get: Sequence$$serializer_getInstance
  });
  package$seq.Sequence_init_4hvzvl$ = Sequence_init;
  package$seq.Sequence = Sequence;
  Object.defineProperty(SequenceElement, 'Companion', {
    get: SequenceElement$Companion_getInstance
  });
  Object.defineProperty(SequenceElement, '$serializer', {
    get: SequenceElement$$serializer_getInstance
  });
  package$seq.SequenceElement_init_fgibw1$ = SequenceElement_init;
  package$seq.SequenceElement = SequenceElement;
  Object.defineProperty(SequenceOperation, 'Companion', {
    get: SequenceOperation$Companion_getInstance
  });
  package$seq.SequenceOperation_init_a66qd8$ = SequenceOperation_init;
  package$seq.SequenceOperation = SequenceOperation;
  Object.defineProperty(SequenceOperationInsert, 'Companion', {
    get: SequenceOperationInsert$Companion_getInstance
  });
  Object.defineProperty(SequenceOperationInsert, '$serializer', {
    get: SequenceOperationInsert$$serializer_getInstance
  });
  package$seq.SequenceOperationInsert_init_fgibw1$ = SequenceOperationInsert_init;
  package$seq.SequenceOperationInsert = SequenceOperationInsert;
  Object.defineProperty(SequenceOperationDelete, 'Companion', {
    get: SequenceOperationDelete$Companion_getInstance
  });
  Object.defineProperty(SequenceOperationDelete, '$serializer', {
    get: SequenceOperationDelete$$serializer_getInstance
  });
  package$seq.SequenceOperationDelete_init_a5bg5s$ = SequenceOperationDelete_init;
  package$seq.SequenceOperationDelete = SequenceOperationDelete;
  Object.defineProperty(SequenceOperationMove, 'Companion', {
    get: SequenceOperationMove$Companion_getInstance
  });
  Object.defineProperty(SequenceOperationMove, '$serializer', {
    get: SequenceOperationMove$$serializer_getInstance
  });
  package$seq.SequenceOperationMove_init_36cupo$ = SequenceOperationMove_init;
  package$seq.SequenceOperationMove = SequenceOperationMove;
  package$reproto.DefaultContext = DefaultContext;
  Object.defineProperty(IdChain, 'Companion', {
    get: IdChain$Companion_getInstance
  });
  Object.defineProperty(IdChain, '$serializer', {
    get: IdChain$$serializer_getInstance
  });
  package$reproto.IdChain_init_n391bk$ = IdChain_init;
  package$reproto.IdChain_init_vqirvp$ = IdChain_init_0;
  package$reproto.IdChain = IdChain;
  Object.defineProperty(Layer, 'Companion', {
    get: Layer$Companion_getInstance
  });
  Object.defineProperty(Layer, '$serializer', {
    get: Layer$$serializer_getInstance
  });
  package$reproto.Layer_init_hwmkcy$ = Layer_init;
  package$reproto.Layer = Layer;
  package$reproto.LogUpstream = LogUpstream;
  package$reproto.NodeContext = NodeContext;
  Object.defineProperty(NodeContextWrapper, 'Companion', {
    get: NodeContextWrapper$Companion_getInstance
  });
  package$reproto.NodeContextWrapper = NodeContextWrapper;
  package$reproto.wrapped_41yg46$ = wrapped;
  Object.defineProperty(Prototype, 'Companion', {
    get: Prototype$Companion_getInstance
  });
  Object.defineProperty(Prototype, '$serializer', {
    get: Prototype$$serializer_getInstance
  });
  package$reproto.Prototype_init_yfjl4t$ = Prototype_init;
  package$reproto.Prototype = Prototype;
  package$reproto.PrototypeListener = PrototypeListener;
  Object.defineProperty(ReplicatedLog, 'Companion', {
    get: ReplicatedLog$Companion_getInstance
  });
  Object.defineProperty(ReplicatedLog, '$serializer', {
    get: ReplicatedLog$$serializer_getInstance
  });
  package$reproto.ReplicatedLog_init_lnfoiw$ = ReplicatedLog_init;
  package$reproto.ReplicatedLog = ReplicatedLog;
  package$reproto.SerializationManager = SerializationManager;
  Object.defineProperty(Update, 'Companion', {
    get: Update$Companion_getInstance
  });
  Object.defineProperty(Update, '$serializer', {
    get: Update$$serializer_getInstance
  });
  package$reproto.Update_init_vir3s8$ = Update_init;
  package$reproto.Update = Update;
  Object.defineProperty(UpdatePayload, 'Companion', {
    get: UpdatePayload$Companion_getInstance
  });
  Object.defineProperty(UpdatePayload, '$serializer', {
    get: UpdatePayload$$serializer_getInstance
  });
  package$reproto.UpdatePayload_init_ffzfk3$ = UpdatePayload_init;
  package$reproto.UpdatePayload = UpdatePayload;
  ContextualInjectorSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  LamportTimestamp$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  LamportClock$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  PlainClock$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  VectorTimestamp$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  VectorClock$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  LWWRegister$LWWRegisterSet$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  LWWRegister$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Doublet$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Identifier$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Sequence$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  SequenceElement$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  SequenceOperationInsert$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  SequenceOperationDelete$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  SequenceOperationMove$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  IdChain$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Layer$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Prototype$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  ReplicatedLog$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Update$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  UpdatePayload$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  LeftId = new Identifier(emptyList(), L_1);
  RightId = new Identifier(listOf(new Doublet(2147483647, '')), L_1);
  Kotlin.defineModule('reproto', _);
  return _;
}));

//# sourceMappingURL=reproto.js.map
