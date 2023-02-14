window.BENCHMARK_DATA = {
  "lastUpdate": 1676379414602,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "2725423bb14b196318f93050a92630156c9d7e47",
          "message": "feat(pandas): implement ops.StartsWith, ops.EndsWith",
          "timestamp": "2023-02-14T07:49:25-05:00",
          "tree_id": "eb10171003a300b67651f8d87a48c412c1316e5d",
          "url": "https://github.com/ibis-project/ibis/commit/2725423bb14b196318f93050a92630156c9d7e47"
        },
        "date": 1676379331861,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 560572.9891494144,
            "unit": "iter/sec",
            "range": "stddev: 5.681237468958024e-7",
            "extra": "mean: 1.7838890195500683 usec\nrounds: 13606"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 172.14715168839047,
            "unit": "iter/sec",
            "range": "stddev: 0.00005376068346107474",
            "extra": "mean: 5.808983710692668 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.60612812401871,
            "unit": "iter/sec",
            "range": "stddev: 0.000049829778738190435",
            "extra": "mean: 10.459580568965375 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1476242.9346057477,
            "unit": "iter/sec",
            "range": "stddev: 9.299204275346373e-8",
            "extra": "mean: 677.3952826856811 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.77605165318961,
            "unit": "iter/sec",
            "range": "stddev: 0.000534470147074115",
            "extra": "mean: 12.228518983051144 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119390.34860989054,
            "unit": "iter/sec",
            "range": "stddev: 3.5893718563089075e-7",
            "extra": "mean: 8.375886423344927 usec\nrounds: 37314"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 88.98845468311521,
            "unit": "iter/sec",
            "range": "stddev: 0.0005707737449059167",
            "extra": "mean: 11.237412803278417 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 270.69810964762127,
            "unit": "iter/sec",
            "range": "stddev: 0.00007145523222377743",
            "extra": "mean: 3.6941521361258878 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.290861991369686,
            "unit": "iter/sec",
            "range": "stddev: 0.002047202164925554",
            "extra": "mean: 436.51691099999823 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.856905887316853,
            "unit": "iter/sec",
            "range": "stddev: 0.0001499611049547178",
            "extra": "mean: 205.89239800000314 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.490584624197705,
            "unit": "iter/sec",
            "range": "stddev: 0.00007253071260291629",
            "extra": "mean: 74.12577200000113 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.47658681463878,
            "unit": "iter/sec",
            "range": "stddev: 0.0005299638881483619",
            "extra": "mean: 11.302425150000772 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 160.82859713039983,
            "unit": "iter/sec",
            "range": "stddev: 0.0006110188010237486",
            "extra": "mean: 6.21779968141611 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5962.043958617236,
            "unit": "iter/sec",
            "range": "stddev: 0.00004740489240326681",
            "extra": "mean: 167.72771333808276 usec\nrounds: 2864"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4545.670183045579,
            "unit": "iter/sec",
            "range": "stddev: 0.0001730097591585854",
            "extra": "mean: 219.98956363569795 usec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.86323450444748,
            "unit": "iter/sec",
            "range": "stddev: 0.004539481913215374",
            "extra": "mean: 1.158433768399999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 143.2517995183489,
            "unit": "iter/sec",
            "range": "stddev: 0.00010649315396113338",
            "extra": "mean: 6.980715100000623 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.606542759561606,
            "unit": "iter/sec",
            "range": "stddev: 0.00018696131246173037",
            "extra": "mean: 22.932338514287053 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 81.03137517627901,
            "unit": "iter/sec",
            "range": "stddev: 0.011462326605131287",
            "extra": "mean: 12.340898791666296 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 161.58012719717428,
            "unit": "iter/sec",
            "range": "stddev: 0.0006201023321969019",
            "extra": "mean: 6.188879891025906 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 55104.49781116259,
            "unit": "iter/sec",
            "range": "stddev: 5.207638864064924e-7",
            "extra": "mean: 18.147338960004618 usec\nrounds: 12500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15378307471656033,
            "unit": "iter/sec",
            "range": "stddev: 0.07040315960055094",
            "extra": "mean: 6.502666186399989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 415.01167727096714,
            "unit": "iter/sec",
            "range": "stddev: 0.000028079952379007",
            "extra": "mean: 2.4095707537093842 msec\nrounds: 337"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.55564649108997,
            "unit": "iter/sec",
            "range": "stddev: 0.0006028792250404865",
            "extra": "mean: 21.951175694446253 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.3357174761586,
            "unit": "iter/sec",
            "range": "stddev: 0.00007368140311662946",
            "extra": "mean: 11.450069099998927 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 142.5538343190219,
            "unit": "iter/sec",
            "range": "stddev: 0.00010701125231396102",
            "extra": "mean: 7.014893740157809 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4453105.349628647,
            "unit": "iter/sec",
            "range": "stddev: 1.2288991624278746e-8",
            "extra": "mean: 224.56239443928064 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.63252618731697,
            "unit": "iter/sec",
            "range": "stddev: 0.00009088483287662312",
            "extra": "mean: 9.743499815788194 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 160.85979611826033,
            "unit": "iter/sec",
            "range": "stddev: 0.000590818716804143",
            "extra": "mean: 6.216593730261995 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 971.9238150860363,
            "unit": "iter/sec",
            "range": "stddev: 0.00006068122110495395",
            "extra": "mean: 1.0288872280709351 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 79.67123195877511,
            "unit": "iter/sec",
            "range": "stddev: 0.011028873649211669",
            "extra": "mean: 12.551581987805054 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4260650.0868595755,
            "unit": "iter/sec",
            "range": "stddev: 1.1853607618738598e-8",
            "extra": "mean: 234.70596730821242 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5981.233588533828,
            "unit": "iter/sec",
            "range": "stddev: 0.00008215473225519138",
            "extra": "mean: 167.18959144431756 usec\nrounds: 2548"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 148.55217007754533,
            "unit": "iter/sec",
            "range": "stddev: 0.0006554438327928216",
            "extra": "mean: 6.731641816326161 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 266.1381238551832,
            "unit": "iter/sec",
            "range": "stddev: 0.000016734102920311538",
            "extra": "mean: 3.7574473942866655 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8580185886181909,
            "unit": "iter/sec",
            "range": "stddev: 0.0020512809601398213",
            "extra": "mean: 1.1654759153999976 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 246.71638081099354,
            "unit": "iter/sec",
            "range": "stddev: 0.00020465405116298368",
            "extra": "mean: 4.0532371491218 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1468.4587643324016,
            "unit": "iter/sec",
            "range": "stddev: 0.000008101071909757297",
            "extra": "mean: 680.9860952783548 usec\nrounds: 1186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1568055.8231630805,
            "unit": "iter/sec",
            "range": "stddev: 9.552737368565364e-8",
            "extra": "mean: 637.7323978063491 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 389514.26749309734,
            "unit": "iter/sec",
            "range": "stddev: 2.6636341766076116e-7",
            "extra": "mean: 2.5673000540801016 usec\nrounds: 1853"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11026122.585350877,
            "unit": "iter/sec",
            "range": "stddev: 3.6381265100588635e-9",
            "extra": "mean: 90.69371324877054 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 328.7088839708254,
            "unit": "iter/sec",
            "range": "stddev: 0.000030074122560812075",
            "extra": "mean: 3.042205576922451 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.580523559682455,
            "unit": "iter/sec",
            "range": "stddev: 0.001732592239533235",
            "extra": "mean: 632.701736000007 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5230.444028956223,
            "unit": "iter/sec",
            "range": "stddev: 0.00004663753651262716",
            "extra": "mean: 191.18835694711717 usec\nrounds: 2188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 120.64105344413763,
            "unit": "iter/sec",
            "range": "stddev: 0.0003107750298120893",
            "extra": "mean: 8.289052287354622 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 235.2656774833138,
            "unit": "iter/sec",
            "range": "stddev: 0.0002078500280164624",
            "extra": "mean: 4.250513762556483 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.33046272269061,
            "unit": "iter/sec",
            "range": "stddev: 0.00027997537882609535",
            "extra": "mean: 15.076029307691167 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.42426886969577,
            "unit": "iter/sec",
            "range": "stddev: 0.00012249032278505127",
            "extra": "mean: 13.807526338984232 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 627.8213375335393,
            "unit": "iter/sec",
            "range": "stddev: 0.000011571078955717769",
            "extra": "mean: 1.5928098333334813 msec\nrounds: 528"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10099.495938074559,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017279301157543344",
            "extra": "mean: 99.014842535859 usec\nrounds: 4890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.31037684547762,
            "unit": "iter/sec",
            "range": "stddev: 0.00047424827409780243",
            "extra": "mean: 26.802195114285205 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.128397892007893,
            "unit": "iter/sec",
            "range": "stddev: 0.02672250305060928",
            "extra": "mean: 33.19127700000498 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1477209.675383573,
            "unit": "iter/sec",
            "range": "stddev: 1.0399908956698668e-7",
            "extra": "mean: 676.9519700988552 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1486413.6813456411,
            "unit": "iter/sec",
            "range": "stddev: 8.274887481197549e-8",
            "extra": "mean: 672.7602231800679 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5740.271339159376,
            "unit": "iter/sec",
            "range": "stddev: 0.00009628177703642354",
            "extra": "mean: 174.20779278814425 usec\nrounds: 2080"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 252.58543713636303,
            "unit": "iter/sec",
            "range": "stddev: 0.00009180169529410466",
            "extra": "mean: 3.959056433883522 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9697.209879300564,
            "unit": "iter/sec",
            "range": "stddev: 0.000013534287786825252",
            "extra": "mean: 103.12244578046891 usec\nrounds: 4740"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10840.251623502878,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013986629425775688",
            "extra": "mean: 92.24878118436736 usec\nrounds: 5708"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 144.67902933940215,
            "unit": "iter/sec",
            "range": "stddev: 0.0006235669968419762",
            "extra": "mean: 6.911851735292629 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19251.109736997245,
            "unit": "iter/sec",
            "range": "stddev: 0.0000278154852740603",
            "extra": "mean: 51.945057384311504 usec\nrounds: 7807"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 516.0912985959668,
            "unit": "iter/sec",
            "range": "stddev: 0.000019556199889669345",
            "extra": "mean: 1.9376416589865266 msec\nrounds: 434"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 242.69031363707663,
            "unit": "iter/sec",
            "range": "stddev: 0.00020693149710249728",
            "extra": "mean: 4.120477595555864 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 240.97480548794366,
            "unit": "iter/sec",
            "range": "stddev: 0.00021924429654074352",
            "extra": "mean: 4.149811421053441 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 237.64976483443473,
            "unit": "iter/sec",
            "range": "stddev: 0.00022573853553298028",
            "extra": "mean: 4.207872878379146 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 158.54145844413992,
            "unit": "iter/sec",
            "range": "stddev: 0.000620836804916963",
            "extra": "mean: 6.307498428572469 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5880.875472047163,
            "unit": "iter/sec",
            "range": "stddev: 0.000056840856548171175",
            "extra": "mean: 170.0427095851929 usec\nrounds: 2097"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4496.480566921375,
            "unit": "iter/sec",
            "range": "stddev: 0.000021470900481289523",
            "extra": "mean: 222.39615742066343 usec\nrounds: 2109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 93.87653490124431,
            "unit": "iter/sec",
            "range": "stddev: 0.0005781456495227294",
            "extra": "mean: 10.652289212122861 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 142.04068800299257,
            "unit": "iter/sec",
            "range": "stddev: 0.011137365680451795",
            "extra": "mean: 7.040236245398443 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5834270694295194,
            "unit": "iter/sec",
            "range": "stddev: 0.001851646828368527",
            "extra": "mean: 1.7140102892000015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.101711448867798,
            "unit": "iter/sec",
            "range": "stddev: 0.00021189448113344487",
            "extra": "mean: 109.8694466000012 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.76084911515914,
            "unit": "iter/sec",
            "range": "stddev: 0.0001485809766542182",
            "extra": "mean: 17.312764880001623 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 192.6409072263308,
            "unit": "iter/sec",
            "range": "stddev: 0.008819185510347305",
            "extra": "mean: 5.191005453608644 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 100.37912614801641,
            "unit": "iter/sec",
            "range": "stddev: 0.00007314708938865628",
            "extra": "mean: 9.962230578949516 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.82738120297466,
            "unit": "iter/sec",
            "range": "stddev: 0.000653722891331072",
            "extra": "mean: 10.889998025639066 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.3396181258659,
            "unit": "iter/sec",
            "range": "stddev: 0.000232824815562185",
            "extra": "mean: 14.850099062499567 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7512406575689268,
            "unit": "iter/sec",
            "range": "stddev: 0.004083862951807844",
            "extra": "mean: 1.3311313624000036 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5296077.189291382,
            "unit": "iter/sec",
            "range": "stddev: 4.605455280172839e-9",
            "extra": "mean: 188.81900022557372 nsec\nrounds: 53192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5179.072906952339,
            "unit": "iter/sec",
            "range": "stddev: 0.00005250073583124121",
            "extra": "mean: 193.08475048837593 usec\nrounds: 2048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 144.78190521929065,
            "unit": "iter/sec",
            "range": "stddev: 0.000032141705589335206",
            "extra": "mean: 6.906940466665171 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 250.1328654542616,
            "unit": "iter/sec",
            "range": "stddev: 0.00019689205574386425",
            "extra": "mean: 3.9978752819383363 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.533655052983587,
            "unit": "iter/sec",
            "range": "stddev: 0.000499663850331645",
            "extra": "mean: 37.68798523999635 msec\nrounds: 25"
          }
        ]
      }
    ]
  }
}