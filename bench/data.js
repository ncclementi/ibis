window.BENCHMARK_DATA = {
  "lastUpdate": 1682707305457,
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
      }
    ]
  }
}