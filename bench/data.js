window.BENCHMARK_DATA = {
  "lastUpdate": 1682707852361,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "mesejoleon@gmail.com",
            "name": "Daniel Mesejo",
            "username": "mesejo"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "b5a2bc5527f34cd3f4568b253da6cfcc222f4ac9",
          "message": "refactor(sqlite): remove roundtripping for DayOfWeekIndex and DayOfWeekName",
          "timestamp": "2023-04-28T14:19:04-04:00",
          "tree_id": "dd7c0a0c894a3371e19745e1f723a0a0750fb6e6",
          "url": "https://github.com/ibis-project/ibis/commit/b5a2bc5527f34cd3f4568b253da6cfcc222f4ac9"
        },
        "date": 1682707219549,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 76.4736165365197,
            "unit": "iter/sec",
            "range": "stddev: 0.010480053861605913",
            "extra": "mean: 13.07640524000135 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 235.28854778359226,
            "unit": "iter/sec",
            "range": "stddev: 0.0006774045269697939",
            "extra": "mean: 4.25010060804045 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.92862507605946,
            "unit": "iter/sec",
            "range": "stddev: 0.001165763282046071",
            "extra": "mean: 10.534230314605022 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1984.9755972166477,
            "unit": "iter/sec",
            "range": "stddev: 0.00013144055929931257",
            "extra": "mean: 503.7845308537847 usec\nrounds: 1183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5708470.952623195,
            "unit": "iter/sec",
            "range": "stddev: 4.309031937961629e-7",
            "extra": "mean: 175.17825846870005 nsec\nrounds: 62112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.88864273131912,
            "unit": "iter/sec",
            "range": "stddev: 0.0012910992772095205",
            "extra": "mean: 14.730004309523029 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.08864970983767,
            "unit": "iter/sec",
            "range": "stddev: 0.018772426087039103",
            "extra": "mean: 26.254540594588644 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1981.8916478202282,
            "unit": "iter/sec",
            "range": "stddev: 0.00008818253964488511",
            "extra": "mean: 504.5684516102806 usec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 50.47429228708684,
            "unit": "iter/sec",
            "range": "stddev: 0.0011645088239852057",
            "extra": "mean: 19.8120657999961 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1842.4765504814272,
            "unit": "iter/sec",
            "range": "stddev: 0.00017495554947866702",
            "extra": "mean: 542.7477488051104 usec\nrounds: 418"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1929.795512594931,
            "unit": "iter/sec",
            "range": "stddev: 0.00017997905048850076",
            "extra": "mean: 518.1896182644417 usec\nrounds: 1763"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5606.946645452585,
            "unit": "iter/sec",
            "range": "stddev: 0.0001704696592660006",
            "extra": "mean: 178.35019008269543 usec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 208.34690163904912,
            "unit": "iter/sec",
            "range": "stddev: 0.0010712715289145221",
            "extra": "mean: 4.79968740659485 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1835.841347623272,
            "unit": "iter/sec",
            "range": "stddev: 0.00020333963748715502",
            "extra": "mean: 544.7093787786325 usec\nrounds: 1621"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.578709656710432,
            "unit": "iter/sec",
            "range": "stddev: 0.0395438583503912",
            "extra": "mean: 1.7279822246000094 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.82590562425042,
            "unit": "iter/sec",
            "range": "stddev: 0.00022431140901967703",
            "extra": "mean: 6.500855599983879 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 159.51023631275538,
            "unit": "iter/sec",
            "range": "stddev: 0.002927312123688602",
            "extra": "mean: 6.26919013547994 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.327100443139132,
            "unit": "iter/sec",
            "range": "stddev: 0.002933722018437148",
            "extra": "mean: 120.0898207999785 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.14533070832717,
            "unit": "iter/sec",
            "range": "stddev: 0.001390621563392315",
            "extra": "mean: 10.852421846152538 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5279850.165878996,
            "unit": "iter/sec",
            "range": "stddev: 4.5366228434657536e-7",
            "extra": "mean: 189.3993141059744 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 37.27383851665998,
            "unit": "iter/sec",
            "range": "stddev: 0.0021712413236483576",
            "extra": "mean: 26.828468432437898 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.2656172126889456,
            "unit": "iter/sec",
            "range": "stddev: 0.016526788609019995",
            "extra": "mean: 790.1283183999908 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 92.95421467795697,
            "unit": "iter/sec",
            "range": "stddev: 0.0018973253417296455",
            "extra": "mean: 10.757984492306605 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5400838.068424038,
            "unit": "iter/sec",
            "range": "stddev: 1.6891016958027784e-7",
            "extra": "mean: 185.15644930082016 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9765.558960684739,
            "unit": "iter/sec",
            "range": "stddev: 0.000038069947305489895",
            "extra": "mean: 102.40069247709322 usec\nrounds: 4998"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.130223911725169,
            "unit": "iter/sec",
            "range": "stddev: 0.016276703260439646",
            "extra": "mean: 469.43421979999584 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 95.13027574840928,
            "unit": "iter/sec",
            "range": "stddev: 0.0008333812646272155",
            "extra": "mean: 10.511900571430033 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2643606.537199908,
            "unit": "iter/sec",
            "range": "stddev: 7.207898601645787e-7",
            "extra": "mean: 378.2711178567743 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 181.64124146989658,
            "unit": "iter/sec",
            "range": "stddev: 0.0005080945737457621",
            "extra": "mean: 5.505357659459347 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5553261987396431,
            "unit": "iter/sec",
            "range": "stddev: 0.04972472137567561",
            "extra": "mean: 1.8007434229999943 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.667887311612425,
            "unit": "iter/sec",
            "range": "stddev: 0.0053916247670199565",
            "extra": "mean: 59.995606000006106 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.29055992506828,
            "unit": "iter/sec",
            "range": "stddev: 0.0013850471894223367",
            "extra": "mean: 10.954035124998736 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1296892627459438,
            "unit": "iter/sec",
            "range": "stddev: 0.020157636112788976",
            "extra": "mean: 885.1991720000001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 220.98484945525357,
            "unit": "iter/sec",
            "range": "stddev: 0.0007990968543645161",
            "extra": "mean: 4.525197100457723 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3495534.7825045306,
            "unit": "iter/sec",
            "range": "stddev: 7.695213431330876e-7",
            "extra": "mean: 286.07925888907914 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.76546494032692,
            "unit": "iter/sec",
            "range": "stddev: 0.0010166610939407693",
            "extra": "mean: 10.023508641974791 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 121.22226371972229,
            "unit": "iter/sec",
            "range": "stddev: 0.0009520336303921438",
            "extra": "mean: 8.24930973333494 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 79.1015557229308,
            "unit": "iter/sec",
            "range": "stddev: 0.015540255784082925",
            "extra": "mean: 12.641976391750148 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 190.63867223748065,
            "unit": "iter/sec",
            "range": "stddev: 0.001058622704516579",
            "extra": "mean: 5.24552541340767 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 81.06236174253667,
            "unit": "iter/sec",
            "range": "stddev: 0.0017963334944580227",
            "extra": "mean: 12.336181410259355 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 952.4778207518787,
            "unit": "iter/sec",
            "range": "stddev: 0.0005227144832373531",
            "extra": "mean: 1.0498932134825014 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 193.21439121669837,
            "unit": "iter/sec",
            "range": "stddev: 0.0010112084407995895",
            "extra": "mean: 5.175597913296512 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 592.1325778571701,
            "unit": "iter/sec",
            "range": "stddev: 0.00023392103195698708",
            "extra": "mean: 1.6888109815184207 msec\nrounds: 487"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10609602393616822,
            "unit": "iter/sec",
            "range": "stddev: 0.15500625378565377",
            "extra": "mean: 9.425423902799992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 75.02259065077055,
            "unit": "iter/sec",
            "range": "stddev: 0.017486611146841136",
            "extra": "mean: 13.329318426965425 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1878.983720465155,
            "unit": "iter/sec",
            "range": "stddev: 0.0002250395129060988",
            "extra": "mean: 532.202588616597 usec\nrounds: 1388"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1684177.478738933,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011427978440263303",
            "extra": "mean: 593.7616507903747 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 80.181290820131,
            "unit": "iter/sec",
            "range": "stddev: 0.001467304329877302",
            "extra": "mean: 12.471737356327662 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 148.368949669677,
            "unit": "iter/sec",
            "range": "stddev: 0.0005980809457312365",
            "extra": "mean: 6.739954702290218 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140384.86010721824,
            "unit": "iter/sec",
            "range": "stddev: 0.000007157251917947226",
            "extra": "mean: 7.123275253729319 usec\nrounds: 36232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 242.6493138748839,
            "unit": "iter/sec",
            "range": "stddev: 0.0005240266066695418",
            "extra": "mean: 4.121173820897862 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 230.80486449596657,
            "unit": "iter/sec",
            "range": "stddev: 0.0006262971667100002",
            "extra": "mean: 4.3326643144363866 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1812726.9761738565,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013105765906725367",
            "extra": "mean: 551.6550551427835 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3805.6511536652893,
            "unit": "iter/sec",
            "range": "stddev: 0.00017032796305285007",
            "extra": "mean: 262.76712174127744 usec\nrounds: 920"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.643935362035727,
            "unit": "iter/sec",
            "range": "stddev: 0.0037675385774002725",
            "extra": "mean: 46.2023187222245 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 87.88595836918067,
            "unit": "iter/sec",
            "range": "stddev: 0.001961981192037823",
            "extra": "mean: 11.378381923074917 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1036987.7046300515,
            "unit": "iter/sec",
            "range": "stddev: 0.000005603030598639958",
            "extra": "mean: 964.331588055572 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.40519770682029,
            "unit": "iter/sec",
            "range": "stddev: 0.002030866692626706",
            "extra": "mean: 21.09473324390603 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.3386147827534,
            "unit": "iter/sec",
            "range": "stddev: 0.0016215252568327668",
            "extra": "mean: 27.518935600005534 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1807.9769885871092,
            "unit": "iter/sec",
            "range": "stddev: 0.00021584452007436655",
            "extra": "mean: 553.1043847972181 usec\nrounds: 1263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1776.874560594133,
            "unit": "iter/sec",
            "range": "stddev: 0.00019022880191308083",
            "extra": "mean: 562.7859288309188 usec\nrounds: 1925"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 592.30757124006,
            "unit": "iter/sec",
            "range": "stddev: 0.00027337054172938986",
            "extra": "mean: 1.6883120334024968 msec\nrounds: 479"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6297634.003426508,
            "unit": "iter/sec",
            "range": "stddev: 2.4117742547834425e-7",
            "extra": "mean: 158.78979303280616 nsec\nrounds: 60976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 91.29960800511658,
            "unit": "iter/sec",
            "range": "stddev: 0.001610816175207305",
            "extra": "mean: 10.95294954545652 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2532206.96368836,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013486887579860788",
            "extra": "mean: 394.91242790976213 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 241.4127856143692,
            "unit": "iter/sec",
            "range": "stddev: 0.0005494459986600461",
            "extra": "mean: 4.142282677593521 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6071948371108048,
            "unit": "iter/sec",
            "range": "stddev: 0.011571802961859369",
            "extra": "mean: 1.6469178241999998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 94.62104856994853,
            "unit": "iter/sec",
            "range": "stddev: 0.0012522286414956983",
            "extra": "mean: 10.56847303124897 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 374.3651534447034,
            "unit": "iter/sec",
            "range": "stddev: 0.0005271446168187966",
            "extra": "mean: 2.6711887866660313 msec\nrounds: 300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 316.25579256795214,
            "unit": "iter/sec",
            "range": "stddev: 0.0005163922403209836",
            "extra": "mean: 3.161997419494334 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 177.82331179778046,
            "unit": "iter/sec",
            "range": "stddev: 0.0005091849148843368",
            "extra": "mean: 5.62355964406508 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 84.48230780562263,
            "unit": "iter/sec",
            "range": "stddev: 0.0012159284779308696",
            "extra": "mean: 11.836797857141944 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 82.05485052556098,
            "unit": "iter/sec",
            "range": "stddev: 0.02104864490366113",
            "extra": "mean: 12.186969979166426 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 89.76015716152078,
            "unit": "iter/sec",
            "range": "stddev: 0.001443258511305431",
            "extra": "mean: 11.140800457830407 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9340.51428081233,
            "unit": "iter/sec",
            "range": "stddev: 0.0000680790779613683",
            "extra": "mean: 107.06048617197035 usec\nrounds: 3182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 449.1510009792232,
            "unit": "iter/sec",
            "range": "stddev: 0.00029786336642746307",
            "extra": "mean: 2.226422734937327 msec\nrounds: 415"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1598.7207894879334,
            "unit": "iter/sec",
            "range": "stddev: 0.00018980441199310734",
            "extra": "mean: 625.500091432662 usec\nrounds: 1564"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12286.17954443365,
            "unit": "iter/sec",
            "range": "stddev: 0.00008906485208152022",
            "extra": "mean: 81.39226652056033 usec\nrounds: 9579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10438529.9923244,
            "unit": "iter/sec",
            "range": "stddev: 1.7353639432124775e-7",
            "extra": "mean: 95.79892961316104 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 81.67683225841134,
            "unit": "iter/sec",
            "range": "stddev: 0.0015810826189315416",
            "extra": "mean: 12.243373945210967 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 79.66487218887086,
            "unit": "iter/sec",
            "range": "stddev: 0.0014611876798748963",
            "extra": "mean: 12.552583999999182 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 103.02612384605001,
            "unit": "iter/sec",
            "range": "stddev: 0.0012634625299777788",
            "extra": "mean: 9.706276065420854 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 82.42930104108301,
            "unit": "iter/sec",
            "range": "stddev: 0.0020771374295765217",
            "extra": "mean: 12.131608388885853 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 188.42739836686567,
            "unit": "iter/sec",
            "range": "stddev: 0.004162906815954812",
            "extra": "mean: 5.307083835297737 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 136.87844746292285,
            "unit": "iter/sec",
            "range": "stddev: 0.0007099831518583191",
            "extra": "mean: 7.305752063493243 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.193141847605766,
            "unit": "iter/sec",
            "range": "stddev: 0.004205423295840813",
            "extra": "mean: 29.24563073077243 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 24.24656141382819,
            "unit": "iter/sec",
            "range": "stddev: 0.0028605375386641144",
            "extra": "mean: 41.24296154545381 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 95.99318667382356,
            "unit": "iter/sec",
            "range": "stddev: 0.0009257485976401242",
            "extra": "mean: 10.417406012344527 msec\nrounds: 81"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "d2216f7fcd134996caa09704418d0d2153520b52",
          "message": "chore: regenerate snapshots",
          "timestamp": "2023-04-28T14:31:14-04:00",
          "tree_id": "49bce22be48a74b03b2a48d4cfbb1356c96da084",
          "url": "https://github.com/ibis-project/ibis/commit/d2216f7fcd134996caa09704418d0d2153520b52"
        },
        "date": 1682707757382,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.0601423945175,
            "unit": "iter/sec",
            "range": "stddev: 0.0005762037411727356",
            "extra": "mean: 21.249404466666043 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 239.1931409399587,
            "unit": "iter/sec",
            "range": "stddev: 0.0003553445218621667",
            "extra": "mean: 4.180721888889849 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1632743.872810197,
            "unit": "iter/sec",
            "range": "stddev: 2.61552718568554e-7",
            "extra": "mean: 612.4659333609073 nsec\nrounds: 144907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1865.846461976231,
            "unit": "iter/sec",
            "range": "stddev: 0.00012462972979594423",
            "extra": "mean: 535.9497795659131 usec\nrounds: 1243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 77.1469214454358,
            "unit": "iter/sec",
            "range": "stddev: 0.01005362474771599",
            "extra": "mean: 12.962280040004922 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 44.355154670596875,
            "unit": "iter/sec",
            "range": "stddev: 0.0004253692159694718",
            "extra": "mean: 22.5452939444466 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 85.82872942474182,
            "unit": "iter/sec",
            "range": "stddev: 0.0009368303182238113",
            "extra": "mean: 11.651110376471799 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1646332.1959028349,
            "unit": "iter/sec",
            "range": "stddev: 2.1926030198007993e-7",
            "extra": "mean: 607.4108266172905 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9399.695666679296,
            "unit": "iter/sec",
            "range": "stddev: 0.00000788370670422436",
            "extra": "mean: 106.38642307802267 usec\nrounds: 1534"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147789.50308837774,
            "unit": "iter/sec",
            "range": "stddev: 9.678126266890462e-7",
            "extra": "mean: 6.76638042014393 usec\nrounds: 39367"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1910.2528583794697,
            "unit": "iter/sec",
            "range": "stddev: 0.00008187924956131188",
            "extra": "mean: 523.4909062501458 usec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 246.73108295026339,
            "unit": "iter/sec",
            "range": "stddev: 0.0003499803704033317",
            "extra": "mean: 4.052995626017588 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 91.68336918629014,
            "unit": "iter/sec",
            "range": "stddev: 0.0007910608345178073",
            "extra": "mean: 10.907103533336718 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 80.38888001541345,
            "unit": "iter/sec",
            "range": "stddev: 0.011744333829062146",
            "extra": "mean: 12.439531435296324 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 245.43610415598434,
            "unit": "iter/sec",
            "range": "stddev: 0.0002980850352390826",
            "extra": "mean: 4.074380187213453 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.021824695040508,
            "unit": "iter/sec",
            "range": "stddev: 0.0035009740605591966",
            "extra": "mean: 494.60272319997785 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1938.2496557594936,
            "unit": "iter/sec",
            "range": "stddev: 0.00009417566851458046",
            "extra": "mean: 515.9294093144854 usec\nrounds: 1224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 84.7806255196226,
            "unit": "iter/sec",
            "range": "stddev: 0.0010070067037418694",
            "extra": "mean: 11.79514769879291 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.59570180900909,
            "unit": "iter/sec",
            "range": "stddev: 0.0009345900778743833",
            "extra": "mean: 11.547917265057187 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 111.5471895189233,
            "unit": "iter/sec",
            "range": "stddev: 0.0002950860539781152",
            "extra": "mean: 8.964815736844326 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 235.51599443221875,
            "unit": "iter/sec",
            "range": "stddev: 0.00041923677331829283",
            "extra": "mean: 4.245996126126367 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 84.60559872848191,
            "unit": "iter/sec",
            "range": "stddev: 0.00100218293049929",
            "extra": "mean: 11.81954876543361 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.55156521275949,
            "unit": "iter/sec",
            "range": "stddev: 0.0017749571856546403",
            "extra": "mean: 28.128156777780887 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1886.510377864528,
            "unit": "iter/sec",
            "range": "stddev: 0.00010384517612320461",
            "extra": "mean: 530.0792467052153 usec\nrounds: 1062"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4054383857720183,
            "unit": "iter/sec",
            "range": "stddev: 0.008054327587756902",
            "extra": "mean: 711.521764400004 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 222.33126125165566,
            "unit": "iter/sec",
            "range": "stddev: 0.0002307400525059852",
            "extra": "mean: 4.497793042554213 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7033507923638899,
            "unit": "iter/sec",
            "range": "stddev: 0.03186812964523861",
            "extra": "mean: 1.4217656549999789 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.82044183077319,
            "unit": "iter/sec",
            "range": "stddev: 0.0009676008891227805",
            "extra": "mean: 11.133323101260808 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1821.3214709318281,
            "unit": "iter/sec",
            "range": "stddev: 0.00011144496771902901",
            "extra": "mean: 549.0518922441396 usec\nrounds: 1225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 135.86423946557835,
            "unit": "iter/sec",
            "range": "stddev: 0.00022757918647211308",
            "extra": "mean: 7.360288505154098 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14564535920417407,
            "unit": "iter/sec",
            "range": "stddev: 0.09754057848075082",
            "extra": "mean: 6.865992884800005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9709364.697318792,
            "unit": "iter/sec",
            "range": "stddev: 1.2728645924568676e-8",
            "extra": "mean: 102.99335035550263 nsec\nrounds: 96145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 84.65806150398,
            "unit": "iter/sec",
            "range": "stddev: 0.0007066147178149264",
            "extra": "mean: 11.812224166661167 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 88.49119255786496,
            "unit": "iter/sec",
            "range": "stddev: 0.0009194955872909694",
            "extra": "mean: 11.300559650002384 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.113499993955149,
            "unit": "iter/sec",
            "range": "stddev: 0.07175215055120737",
            "extra": "mean: 898.0691561999947 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.56541363853329,
            "unit": "iter/sec",
            "range": "stddev: 0.0014969393579359683",
            "extra": "mean: 46.370545761904154 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5128110.282512858,
            "unit": "iter/sec",
            "range": "stddev: 3.112989070555171e-8",
            "extra": "mean: 195.00360657422024 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.43452649758861,
            "unit": "iter/sec",
            "range": "stddev: 0.001535715286342899",
            "extra": "mean: 60.84750906250491 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1873.1958844085987,
            "unit": "iter/sec",
            "range": "stddev: 0.00010380866001234833",
            "extra": "mean: 533.846998236235 usec\nrounds: 1134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 79.25874603140397,
            "unit": "iter/sec",
            "range": "stddev: 0.00105727245331593",
            "extra": "mean: 12.616904128205347 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 80.21615722140061,
            "unit": "iter/sec",
            "range": "stddev: 0.0010271166681181483",
            "extra": "mean: 12.466316445949285 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3736.5369708505095,
            "unit": "iter/sec",
            "range": "stddev: 0.000036253492081048747",
            "extra": "mean: 267.6274871093756 usec\nrounds: 737"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 455.16347644333956,
            "unit": "iter/sec",
            "range": "stddev: 0.00005220396916578332",
            "extra": "mean: 2.197012835506989 msec\nrounds: 383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 95.14045910783983,
            "unit": "iter/sec",
            "range": "stddev: 0.00016092516519441587",
            "extra": "mean: 10.510775430109286 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.1570065065501,
            "unit": "iter/sec",
            "range": "stddev: 0.0012026029107984355",
            "extra": "mean: 24.902254600000823 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 357.6054737923751,
            "unit": "iter/sec",
            "range": "stddev: 0.00006484160871585765",
            "extra": "mean: 2.7963777774290937 msec\nrounds: 319"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1652583.0576833396,
            "unit": "iter/sec",
            "range": "stddev: 3.2344881878067025e-7",
            "extra": "mean: 605.1133075283019 nsec\nrounds: 163908"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1493783.2025543097,
            "unit": "iter/sec",
            "range": "stddev: 3.83008224326705e-7",
            "extra": "mean: 669.4411868402589 nsec\nrounds: 121937"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 26.847264910133692,
            "unit": "iter/sec",
            "range": "stddev: 0.0005963704948486901",
            "extra": "mean: 37.24774212000057 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10658.256662392625,
            "unit": "iter/sec",
            "range": "stddev: 0.000023588992140945153",
            "extra": "mean: 93.82397437739264 usec\nrounds: 4176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 87.69021462029376,
            "unit": "iter/sec",
            "range": "stddev: 0.0007712664423709458",
            "extra": "mean: 11.403780961537008 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.52728506195831,
            "unit": "iter/sec",
            "range": "stddev: 0.00042182707207860263",
            "extra": "mean: 11.42500877631616 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 151.60562980913755,
            "unit": "iter/sec",
            "range": "stddev: 0.00014038917169439518",
            "extra": "mean: 6.596061117644116 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 90.97703508363344,
            "unit": "iter/sec",
            "range": "stddev: 0.00028935655698186064",
            "extra": "mean: 10.99178489473436 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 242.17112709606198,
            "unit": "iter/sec",
            "range": "stddev: 0.00032356898438829006",
            "extra": "mean: 4.129311417059764 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 240.69612294638742,
            "unit": "iter/sec",
            "range": "stddev: 0.00032170166400296695",
            "extra": "mean: 4.154616151514579 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7186.956481286918,
            "unit": "iter/sec",
            "range": "stddev: 0.00002125342234256375",
            "extra": "mean: 139.1409566210337 usec\nrounds: 3942"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 140.47994635764346,
            "unit": "iter/sec",
            "range": "stddev: 0.0038436776015071308",
            "extra": "mean: 7.118453743241982 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 222.95022903691728,
            "unit": "iter/sec",
            "range": "stddev: 0.0002852739844464882",
            "extra": "mean: 4.485305999997043 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.704223709585266,
            "unit": "iter/sec",
            "range": "stddev: 0.01907405976946743",
            "extra": "mean: 1.4200033119999944 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 86.47584711225747,
            "unit": "iter/sec",
            "range": "stddev: 0.0008847404089906475",
            "extra": "mean: 11.56392256790342 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1503.11658991758,
            "unit": "iter/sec",
            "range": "stddev: 0.000023396372303243076",
            "extra": "mean: 665.2843875902086 usec\nrounds: 1241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4996537.663136939,
            "unit": "iter/sec",
            "range": "stddev: 2.4773091291343364e-8",
            "extra": "mean: 200.1385894432172 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12038.06708633093,
            "unit": "iter/sec",
            "range": "stddev: 0.000002820705055425476",
            "extra": "mean: 83.0698145166085 usec\nrounds: 5208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 196.4770576667446,
            "unit": "iter/sec",
            "range": "stddev: 0.004845490340840357",
            "extra": "mean: 5.089652765953744 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.352176287558625,
            "unit": "iter/sec",
            "range": "stddev: 0.0013711668392543187",
            "extra": "mean: 136.014148857149 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1871.7704893265982,
            "unit": "iter/sec",
            "range": "stddev: 0.000101009038739615",
            "extra": "mean: 534.2535346626644 usec\nrounds: 1154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5702927.801610541,
            "unit": "iter/sec",
            "range": "stddev: 2.2857260331011087e-8",
            "extra": "mean: 175.34852882369142 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 78.7339729768414,
            "unit": "iter/sec",
            "range": "stddev: 0.001136138608931016",
            "extra": "mean: 12.700997576918128 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 270.6183136931234,
            "unit": "iter/sec",
            "range": "stddev: 0.00009141182829670661",
            "extra": "mean: 3.6952414134617038 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.765432476329522,
            "unit": "iter/sec",
            "range": "stddev: 0.039097060748692535",
            "extra": "mean: 33.5960178235352 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1020.6443282493543,
            "unit": "iter/sec",
            "range": "stddev: 0.000035986253789472027",
            "extra": "mean: 979.7732396311218 usec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3807390.341000643,
            "unit": "iter/sec",
            "range": "stddev: 4.286520425348823e-8",
            "extra": "mean: 262.6470916919155 nsec\nrounds: 169463"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 140.6049834815856,
            "unit": "iter/sec",
            "range": "stddev: 0.00010436043603221378",
            "extra": "mean: 7.112123448533142 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 164.54627502243255,
            "unit": "iter/sec",
            "range": "stddev: 0.00010481902059360064",
            "extra": "mean: 6.077317762821858 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.44057119367852,
            "unit": "iter/sec",
            "range": "stddev: 0.0008920504884808607",
            "extra": "mean: 11.704041604932373 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.4366382147179,
            "unit": "iter/sec",
            "range": "stddev: 0.00015920491953499099",
            "extra": "mean: 5.867283058823241 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 636.6052859975737,
            "unit": "iter/sec",
            "range": "stddev: 0.000029119170014018553",
            "extra": "mean: 1.5708320712935635 msec\nrounds: 533"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 97.16744390700742,
            "unit": "iter/sec",
            "range": "stddev: 0.0002098955348316009",
            "extra": "mean: 10.291512875001985 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 591.701595290628,
            "unit": "iter/sec",
            "range": "stddev: 0.000059074193251226264",
            "extra": "mean: 1.6900410746887151 msec\nrounds: 482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.13624110769388,
            "unit": "iter/sec",
            "range": "stddev: 0.001128984916053207",
            "extra": "mean: 26.92787342423895 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4647062.368763542,
            "unit": "iter/sec",
            "range": "stddev: 3.048524113023594e-8",
            "extra": "mean: 215.18970924980408 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 69.52665971957082,
            "unit": "iter/sec",
            "range": "stddev: 0.025892837868109992",
            "extra": "mean: 14.382971999998347 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 54.48242531348886,
            "unit": "iter/sec",
            "range": "stddev: 0.0015090755261067765",
            "extra": "mean: 18.354542666668294 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 862478.2947263663,
            "unit": "iter/sec",
            "range": "stddev: 3.0142206714727006e-7",
            "extra": "mean: 1.1594494680208323 usec\nrounds: 78119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 111.16028654352408,
            "unit": "iter/sec",
            "range": "stddev: 0.00039610611868905605",
            "extra": "mean: 8.996018552079358 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1854.7324558228563,
            "unit": "iter/sec",
            "range": "stddev: 0.00010400420338338277",
            "extra": "mean: 539.1613204699908 usec\nrounds: 1192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6581107082538883,
            "unit": "iter/sec",
            "range": "stddev: 0.011690417034052509",
            "extra": "mean: 1.519501183400007 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}