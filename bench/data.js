window.BENCHMARK_DATA = {
  "lastUpdate": 1683801999588,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "20f301112a5aee0374aa3c97d15a734952f332b0",
          "message": "chore(deps): update trinodb/trino docker tag to v417",
          "timestamp": "2023-05-11T06:39:42-04:00",
          "tree_id": "004afe5d438c42905185f575c0f049d7417eb788",
          "url": "https://github.com/ibis-project/ibis/commit/20f301112a5aee0374aa3c97d15a734952f332b0"
        },
        "date": 1683801911864,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.372031379897358,
            "unit": "iter/sec",
            "range": "stddev: 0.0023001181261185213",
            "extra": "mean: 421.579582999982 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1025311.9173773486,
            "unit": "iter/sec",
            "range": "stddev: 1.1034933670994145e-7",
            "extra": "mean: 975.3129589656053 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 408.6473346293822,
            "unit": "iter/sec",
            "range": "stddev: 0.00003096743907254476",
            "extra": "mean: 2.4470978157900825 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1192.7685115951003,
            "unit": "iter/sec",
            "range": "stddev: 0.000018652572948161598",
            "extra": "mean: 838.3856467360048 usec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2288.5629889146153,
            "unit": "iter/sec",
            "range": "stddev: 0.00007530051894835026",
            "extra": "mean: 436.95541911838086 usec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.785843300924526,
            "unit": "iter/sec",
            "range": "stddev: 0.00010177891523365071",
            "extra": "mean: 21.373986861111877 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2327.9305502115926,
            "unit": "iter/sec",
            "range": "stddev: 0.00007771971023346302",
            "extra": "mean: 429.5660795847656 usec\nrounds: 867"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5837765.388018213,
            "unit": "iter/sec",
            "range": "stddev: 1.35962924402057e-8",
            "extra": "mean: 171.29842217614814 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 89.9833971312506,
            "unit": "iter/sec",
            "range": "stddev: 0.006557845673241104",
            "extra": "mean: 11.113161226191437 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 79.63613295218407,
            "unit": "iter/sec",
            "range": "stddev: 0.013933866749842996",
            "extra": "mean: 12.557114000003367 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 275.7446941255072,
            "unit": "iter/sec",
            "range": "stddev: 0.0002294228007569654",
            "extra": "mean: 3.62654303529352 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.450339015757145,
            "unit": "iter/sec",
            "range": "stddev: 0.0118152753747163",
            "extra": "mean: 29.02729054546061 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 266.6850645316813,
            "unit": "iter/sec",
            "range": "stddev: 0.00031361233911511246",
            "extra": "mean: 3.7497412978716076 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 279.29544947450063,
            "unit": "iter/sec",
            "range": "stddev: 0.0002570964231351307",
            "extra": "mean: 3.5804378549006715 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 246.71098896671714,
            "unit": "iter/sec",
            "range": "stddev: 0.004051438766911325",
            "extra": "mean: 4.053325732219031 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.327851814726,
            "unit": "iter/sec",
            "range": "stddev: 0.00007915369073620245",
            "extra": "mean: 9.868954903223061 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.32013902239466,
            "unit": "iter/sec",
            "range": "stddev: 0.000060414374799897235",
            "extra": "mean: 9.317915622447419 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9912.395749324367,
            "unit": "iter/sec",
            "range": "stddev: 0.000001605343783538853",
            "extra": "mean: 100.883784837602 usec\nrounds: 5131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7778401657792376,
            "unit": "iter/sec",
            "range": "stddev: 0.004531821748998094",
            "extra": "mean: 1.2856111628000122 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 125.09117073613473,
            "unit": "iter/sec",
            "range": "stddev: 0.00011109104744380133",
            "extra": "mean: 7.994169325582408 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.86223743657281,
            "unit": "iter/sec",
            "range": "stddev: 0.00009339843101355016",
            "extra": "mean: 14.73573577550617 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.1277286080359,
            "unit": "iter/sec",
            "range": "stddev: 0.00010493114905770307",
            "extra": "mean: 6.488125199996375 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1751968.9918132843,
            "unit": "iter/sec",
            "range": "stddev: 9.02168845880648e-8",
            "extra": "mean: 570.7863579052288 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 56.53502674621479,
            "unit": "iter/sec",
            "range": "stddev: 0.00010742503760653496",
            "extra": "mean: 17.688149410258365 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2290.774153084149,
            "unit": "iter/sec",
            "range": "stddev: 0.00008431666667339238",
            "extra": "mean: 436.53364896476825 usec\nrounds: 339"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 102.13481849693022,
            "unit": "iter/sec",
            "range": "stddev: 0.0005466940624283399",
            "extra": "mean: 9.790980340656855 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2291.6681884803897,
            "unit": "iter/sec",
            "range": "stddev: 0.00008466246871249138",
            "extra": "mean: 436.36334659037277 usec\nrounds: 1584"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.54986967883107,
            "unit": "iter/sec",
            "range": "stddev: 0.00006688619539997395",
            "extra": "mean: 8.96460034313936 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.305019148100623,
            "unit": "iter/sec",
            "range": "stddev: 0.00011961310975893608",
            "extra": "mean: 51.80000042105049 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.27018068691729,
            "unit": "iter/sec",
            "range": "stddev: 0.0005562677951009231",
            "extra": "mean: 9.499366235288294 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 97.18229649541225,
            "unit": "iter/sec",
            "range": "stddev: 0.0006397188315369515",
            "extra": "mean: 10.289939999999977 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 88.98246118960371,
            "unit": "iter/sec",
            "range": "stddev: 0.012757451732493688",
            "extra": "mean: 11.238169709300367 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 117.05639272488844,
            "unit": "iter/sec",
            "range": "stddev: 0.00007415772620056106",
            "extra": "mean: 8.542890966666366 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.561023291732992,
            "unit": "iter/sec",
            "range": "stddev: 0.00016654197063257752",
            "extra": "mean: 116.80846622221628 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 273.79548086859745,
            "unit": "iter/sec",
            "range": "stddev: 0.0002388762191612066",
            "extra": "mean: 3.6523612326528117 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 280.0535889096882,
            "unit": "iter/sec",
            "range": "stddev: 0.00023736050163711067",
            "extra": "mean: 3.570745170212692 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 692.7561758617178,
            "unit": "iter/sec",
            "range": "stddev: 0.000028754047412240014",
            "extra": "mean: 1.4435093252775442 msec\nrounds: 538"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 232.61623187674851,
            "unit": "iter/sec",
            "range": "stddev: 0.00024225006564944427",
            "extra": "mean: 4.298926140845791 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 174.2908311571654,
            "unit": "iter/sec",
            "range": "stddev: 0.000055616426829799706",
            "extra": "mean: 5.7375364691345 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7135140.865818295,
            "unit": "iter/sec",
            "range": "stddev: 3.7133321439468874e-9",
            "extra": "mean: 140.15140258699583 nsec\nrounds: 67568"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.176278516445564,
            "unit": "iter/sec",
            "range": "stddev: 0.00034315050708646756",
            "extra": "mean: 35.49084735999941 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.29282537069997,
            "unit": "iter/sec",
            "range": "stddev: 0.00007427196397836945",
            "extra": "mean: 9.497323264708136 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1778581715684804,
            "unit": "iter/sec",
            "range": "stddev: 0.09303403023969527",
            "extra": "mean: 5.622457440000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 253.42906129808208,
            "unit": "iter/sec",
            "range": "stddev: 0.00034084298703749335",
            "extra": "mean: 3.9458773783792873 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4517863.661417403,
            "unit": "iter/sec",
            "range": "stddev: 1.3280809808339237e-8",
            "extra": "mean: 221.34355415357464 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.36750238404243,
            "unit": "iter/sec",
            "range": "stddev: 0.0001540896012119549",
            "extra": "mean: 20.256240476189056 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3152403992364057,
            "unit": "iter/sec",
            "range": "stddev: 0.05390399299625735",
            "extra": "mean: 760.317277799993 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6295541.844595583,
            "unit": "iter/sec",
            "range": "stddev: 4.78231209391777e-9",
            "extra": "mean: 158.8425626713146 nsec\nrounds: 61350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11707.523092123436,
            "unit": "iter/sec",
            "range": "stddev: 0.000017860429286844823",
            "extra": "mean: 85.4151635774076 usec\nrounds: 4316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.73270765706398,
            "unit": "iter/sec",
            "range": "stddev: 0.0006421244859266976",
            "extra": "mean: 10.026800870969543 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6372227.600774155,
            "unit": "iter/sec",
            "range": "stddev: 8.415249266933379e-9",
            "extra": "mean: 156.93099221354103 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.40071721286053,
            "unit": "iter/sec",
            "range": "stddev: 0.0007815155780797123",
            "extra": "mean: 9.960088212117952 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8704922436401608,
            "unit": "iter/sec",
            "range": "stddev: 0.002037449056274048",
            "extra": "mean: 1.1487753134000058 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 101.9763676054674,
            "unit": "iter/sec",
            "range": "stddev: 0.0006752555878130638",
            "extra": "mean: 9.806193567012143 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 85.0909246733805,
            "unit": "iter/sec",
            "range": "stddev: 0.0005433828230776932",
            "extra": "mean: 11.752134599999664 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 192.37472821269128,
            "unit": "iter/sec",
            "range": "stddev: 0.000056437558638611005",
            "extra": "mean: 5.19818798077464 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11167610.211068016,
            "unit": "iter/sec",
            "range": "stddev: 3.083632946458816e-9",
            "extra": "mean: 89.5446725933738 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 200.62939383443026,
            "unit": "iter/sec",
            "range": "stddev: 0.000028171531556743654",
            "extra": "mean: 4.984314515874238 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2342.1108692961993,
            "unit": "iter/sec",
            "range": "stddev: 0.0000771389683011479",
            "extra": "mean: 426.9652701370617 usec\nrounds: 1403"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2230.525666882796,
            "unit": "iter/sec",
            "range": "stddev: 0.00008523806396185658",
            "extra": "mean: 448.32481188056437 usec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.28788891555155,
            "unit": "iter/sec",
            "range": "stddev: 0.000761973767989616",
            "extra": "mean: 10.494513115787939 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 99.6029402179253,
            "unit": "iter/sec",
            "range": "stddev: 0.0006909162251731823",
            "extra": "mean: 10.039864263163915 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 26.261618711306827,
            "unit": "iter/sec",
            "range": "stddev: 0.0264023028550673",
            "extra": "mean: 38.07838393333517 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1609230.6502963784,
            "unit": "iter/sec",
            "range": "stddev: 1.0687448538749397e-7",
            "extra": "mean: 621.4149598852259 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 759.542633856034,
            "unit": "iter/sec",
            "range": "stddev: 0.00007461702936995683",
            "extra": "mean: 1.316581789389775 msec\nrounds: 622"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.07797948037845,
            "unit": "iter/sec",
            "range": "stddev: 0.00005680234620818633",
            "extra": "mean: 6.094663056961807 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8710950472388186,
            "unit": "iter/sec",
            "range": "stddev: 0.004595736204172216",
            "extra": "mean: 1.147980353200012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1760.510497822445,
            "unit": "iter/sec",
            "range": "stddev: 0.000004140912132161249",
            "extra": "mean: 568.0170616630168 usec\nrounds: 1346"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 103.95523830852879,
            "unit": "iter/sec",
            "range": "stddev: 0.0006564318190505561",
            "extra": "mean: 9.61952486734819 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.96742645764175,
            "unit": "iter/sec",
            "range": "stddev: 0.0007920599737224329",
            "extra": "mean: 10.529926284208925 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 101.22010919962256,
            "unit": "iter/sec",
            "range": "stddev: 0.0007257920425317712",
            "extra": "mean: 9.879459802081788 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2243.2639986461027,
            "unit": "iter/sec",
            "range": "stddev: 0.00008470758022492655",
            "extra": "mean: 445.77900800063617 usec\nrounds: 1250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.220683411237644,
            "unit": "iter/sec",
            "range": "stddev: 0.00015830271174813483",
            "extra": "mean: 17.176026480770954 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2236.838002504459,
            "unit": "iter/sec",
            "range": "stddev: 0.0000776440169178116",
            "extra": "mean: 447.0596435147997 usec\nrounds: 1411"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6514882373864985,
            "unit": "iter/sec",
            "range": "stddev: 0.0011135576558510007",
            "extra": "mean: 605.5144550000023 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.14545698430162,
            "unit": "iter/sec",
            "range": "stddev: 0.0007646217657469568",
            "extra": "mean: 9.98547542857342 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140395.05639704224,
            "unit": "iter/sec",
            "range": "stddev: 3.6799815129026086e-7",
            "extra": "mean: 7.122757920848469 usec\nrounds: 44250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.59641391753172,
            "unit": "iter/sec",
            "range": "stddev: 0.0008154483222160763",
            "extra": "mean: 10.040522150004563 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.64047752499492,
            "unit": "iter/sec",
            "range": "stddev: 0.0007892330085608042",
            "extra": "mean: 10.036081970293136 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 177.44074278446155,
            "unit": "iter/sec",
            "range": "stddev: 0.004296391915030723",
            "extra": "mean: 5.635684253276073 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13546.863291301699,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015719051167460589",
            "extra": "mean: 73.81782620055594 usec\nrounds: 6916"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2560274.951098234,
            "unit": "iter/sec",
            "range": "stddev: 1.4451994839621486e-8",
            "extra": "mean: 390.5830502972467 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2220.996962967596,
            "unit": "iter/sec",
            "range": "stddev: 0.00009746787007443716",
            "extra": "mean: 450.2482518768711 usec\nrounds: 1199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2508332.872412225,
            "unit": "iter/sec",
            "range": "stddev: 1.4159966228637681e-8",
            "extra": "mean: 398.6711696037134 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 423.02478479393517,
            "unit": "iter/sec",
            "range": "stddev: 0.00010024369775345672",
            "extra": "mean: 2.3639276844904544 msec\nrounds: 374"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 542.0527393730333,
            "unit": "iter/sec",
            "range": "stddev: 0.000030796014852456126",
            "extra": "mean: 1.8448389379170975 msec\nrounds: 451"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 273.9565758773642,
            "unit": "iter/sec",
            "range": "stddev: 0.00032150768576804566",
            "extra": "mean: 3.650213530364925 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 83.2835244034784,
            "unit": "iter/sec",
            "range": "stddev: 0.019544993881904504",
            "extra": "mean: 12.007176775509206 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8133.942557488854,
            "unit": "iter/sec",
            "range": "stddev: 0.000014044610897709316",
            "extra": "mean: 122.94161077881085 usec\nrounds: 4843"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4679.686637768817,
            "unit": "iter/sec",
            "range": "stddev: 0.000024047500275359406",
            "extra": "mean: 213.6895218430225 usec\nrounds: 2106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 264.378141258414,
            "unit": "iter/sec",
            "range": "stddev: 0.00025525202238399475",
            "extra": "mean: 3.7824609676128973 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.00150482022579,
            "unit": "iter/sec",
            "range": "stddev: 0.025783409358913968",
            "extra": "mean: 27.025927860463103 msec\nrounds: 43"
          }
        ]
      }
    ]
  }
}